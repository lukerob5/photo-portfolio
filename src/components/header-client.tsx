"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, Instagram } from "lucide-react"
import { MobileMenu } from "./mobile-menu"

type HeaderClientProps = {
  galleries: Array<{ name: string; href: string }>
}

const socialLinks = [
  { name: "Email", href: "mailto:photographer@example.com", icon: Mail },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: Instagram,
  },
]

export function HeaderClient({ galleries }: HeaderClientProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    {
      name: "Gallery",
      href: "/",
      isCurrent: (path: string) =>
        path === "/" || galleries.findIndex((val) => val.href === path) !== -1,
      submenu: galleries,
    },
    {
      name: "About",
      href: "/about",
      isCurrent: (path: string) => path === "/about",
    },
  ]

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left side navigation - hidden on mobile */}
          <div className="hidden gap-8 md:flex">
            {navigation.map((item) => (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className={`relative text-sm hover:text-gray-600 ${
                    item.isCurrent(pathname)
                      ? "text-gray-900 after:absolute after:-bottom-[1.5px] after:left-0 after:h-[1px] after:w-full after:bg-current"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </Link>
                {!!item.submenu?.length && (
                  <>
                    <div className="absolute -bottom-2 left-0 h-2 w-full"></div>
                    <div className="invisible absolute left-0 top-[calc(100%-1px)] z-50 min-w-[150px] rounded-b-md border-x border-b bg-white py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:block">
            <Link href="/" className="text-xl uppercase tracking-wider">
              Portfolio
            </Link>
          </div>

          {/* Right side social links - hidden on mobile */}
          <div className="hidden items-center gap-4 md:flex">
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

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
          >
            <span className="block h-px w-6 bg-black" />
            <span className="block h-px w-4 bg-black" />
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  )
}
