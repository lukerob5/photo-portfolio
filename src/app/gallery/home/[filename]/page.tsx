import Image from "next/image"

import { getImagesFromFolder } from "@/utils/server"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export const dynamicParams = false // 404 on unknown paths
export const revalidate = false

export function generateStaticParams(): { filename: string }[] {
  const imageFiles = getImagesFromFolder("_default")
  if (!imageFiles) {
    return []
  }
  return imageFiles.map((imageFile) => ({
    filename: imageFile.name,
  }))
}

export default async function DefaultImagePage({
  params,
}: {
  params: Promise<{ filename: string }>
}) {
  const { filename } = await params

  const src = `/_gallery/_default/${filename}`
  const returnPath = "/"

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
