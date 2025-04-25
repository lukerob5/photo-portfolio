import Image from "next/image"
import Link from "next/link"

export interface Photo {
  src: string
  name: string
}

export interface GalleryProps {
  images: Photo[]
  name?: string
}

export function Gallery({ images, name }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image) => {
        return (
          <Link
            key={image.src}
            href={
              name
                ? `/gallery/${name}/${image.name}`
                : `/gallery/home/${image.name}`
            }
            className="group relative aspect-square overflow-hidden sm:aspect-[5/6]"
          >
            <Image
              src={image.src}
              alt={image.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        )
      })}
    </div>
  )
}
