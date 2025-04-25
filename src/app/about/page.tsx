import Image from "next/image"
import Link from "next/link"
import { Mail, Instagram } from "lucide-react"

const socialLinks = [
  { name: "Email", href: "mailto:photographer@example.com", icon: Mail },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: Instagram,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Mobile title */}
      <h1 className="px-4 py-8 text-3xl font-light uppercase md:hidden">
        About
      </h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          {/* Photographer's photo - full width on mobile */}
          <div className="mb-8 md:mb-0 md:w-1/2 md:items-center">
            <div className="relative aspect-square w-full overflow-hidden sm:aspect-[5/6] lg:w-3/4">
              <Image
                src="/me.jpg"
                alt="me"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="md:w-1/2">
            {/* Desktop title */}
            <h1 className="mb-4 hidden text-2xl uppercase md:block">About</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                accumsan leo, ut sagittis neque. Nunc non nisi elit. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Nulla
                facilisi.
              </p>
              <p>
                In sodales posuere arcu, sed dictum velit vulputate vitae. Ut
                orci quam, varius eget mauris quis, bibendum consectetur mi.
                Nulla maximus fermentum elit, sed fermentum ex commodo mattis.
                Mauris gravida in nisl id euismod. Aenean dignissim interdum
                sem. Cras venenatis nulla et feugiat tincidunt. Cras quis lacus
                in ex tempus sagittis et at lacus. Donec at lorem tellus.
              </p>
            </div>

            {/* Social links for mobile - otherwise these links are visible on the header */}
            <div className="mt-8 flex gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 transition-colors hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
