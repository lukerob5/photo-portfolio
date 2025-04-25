import Image from "next/image"

import { getGallerySubdirectories, getImagesFromFolder } from "@/utils/server"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export const dynamicParams = false // 404 on unknown paths
export const revalidate = false

export function generateStaticParams(): {
  filename: string
  foldername: string
}[] {
  const params = getGallerySubdirectories().flatMap((subfolder) =>
    (getImagesFromFolder(subfolder.name) ?? []).map((imageFile) => ({
      filename: imageFile.name,
      foldername: subfolder.name,
    })),
  )
  return params
}

export default async function ImagePage({
  params,
}: {
  params: Promise<{ filename: string; foldername: string }>
}) {
  const { filename, foldername } = await params

  const src = `/_gallery/${foldername}/${filename}`
  const returnPath = `/gallery/${foldername.toLowerCase()}`

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Link
          href={returnPath}
          className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Gallery
        </Link>
        <div className="relative h-[75vh] w-full max-w-full overflow-hidden">
          <Image
            src={src}
            alt={filename}
            fill
            className="object-contain object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>
      </div>
    </>
  )
}
