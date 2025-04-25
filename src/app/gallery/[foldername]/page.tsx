import { Gallery } from "@/components/gallery"

import { getGallerySubdirectories, getImagesFromFolder } from "@/utils/server"
import { notFound } from "next/navigation"

export function generateStaticParams(): { foldername: string }[] {
  return getGallerySubdirectories().map((dir) => ({
    foldername: dir.name,
  }))
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ foldername: string }>
}) {
  const { foldername: galleryFolder } = await params

  const galleryImages = getImagesFromFolder(galleryFolder, undefined, true)
  if (!galleryImages?.length) {
    notFound()
  }

  return (
    <section className="container mx-auto px-4 pb-8">
      <Gallery images={galleryImages} name={galleryFolder} />
    </section>
  )
}
