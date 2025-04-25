import { Gallery } from "@/components/gallery"
import { getImagesFromFolder } from "@/utils/server"

export default async function Home() {
  const defaultGalleryImages = getImagesFromFolder("_default")

  if (!defaultGalleryImages?.length) {
    throw new Error("Default gallery images not found")
  }

  return (
    <section className="container mx-auto px-4 pb-8">
      <Gallery images={defaultGalleryImages} />
    </section>
  )
}
