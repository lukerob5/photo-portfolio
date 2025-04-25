import fs from "fs"
import path from "path"
import { isImageFilename } from "./helpers"

export interface FSImage {
  src: string
  name: string
}

export function getImagesFromFolder(
  folder: string,
  parent?: string,
  shuffle = false,
): FSImage[] | null {
  const parentFoldername = parent ?? "_gallery"
  const folderPath = path.join(
    process.cwd(),
    "public",
    parentFoldername,
    folder,
  )

  let imageFiles
  try {
    imageFiles = fs
      .readdirSync(folderPath)
      // filter out hidden ('_' prefix) and non-image files
      .filter((file) => isImageFilename(file) && !/^[_]/.test(file))
      .sort() // by filename
  } catch (error) {
    console.error(error)
    return null
  }

  // shuffle the array using Fisher-Yates algorithm
  if (shuffle) {
    for (let i = imageFiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[imageFiles[i], imageFiles[j]] = [imageFiles[j], imageFiles[i]]
    }
  }

  return imageFiles.map((file) => ({
    name: file,
    src: `/${parentFoldername}/${folder}/${file}`,
  }))
}

export function getGallerySubdirectories(params?: {
  includeDefault?: boolean
}): fs.Dirent[] {
  const { includeDefault = false } = params ?? {}
  const galleryPath = path.join(process.cwd(), "public", "_gallery")

  return (
    fs
      .readdirSync(galleryPath, { withFileTypes: true })
      // filter out directories with '_' prefix,
      // make an exception for '_default' if includeDefault is true
      .filter(
        (dirent) =>
          dirent.isDirectory() &&
          (includeDefault
            ? dirent.name === "_default" || !/^[_]/.test(dirent.name)
            : !/^[_]/.test(dirent.name)),
      )
  )
}

export function getGalleryNavItems(): { name: string; href: string }[] {
  const subfolders = getGallerySubdirectories()
  return subfolders.map((dirent) => ({
    // capitalize the galleryFolder name for the nav items, but not the hrefs
    name: dirent.name.charAt(0).toUpperCase() + dirent.name.slice(1),
    href: `/gallery/${dirent.name}`,
  }))
}

export function getImageSubfolder(filename: string): string | null {
  const subdirs = getGallerySubdirectories({ includeDefault: true })

  for (const subdir of subdirs) {
    const imageFiles = getImagesFromFolder(subdir.name)
    if (imageFiles?.find((imageFile) => imageFile.name === filename)) {
      return subdir.name
    }
  }

  return null
}
