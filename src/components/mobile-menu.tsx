"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{
    name: string
    href: string
    submenu?: Array<{ name: string; href: string }>
  }>
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="flex h-16 items-center justify-between px-4">
            <Link
              href="/"
              className="text-xl font-light uppercase tracking-wider"
              onClick={onClose}
            >
              Portfolio
            </Link>
            <button
              onClick={onClose}
              className="flex h-8 w-8 flex-col items-end justify-center gap-1.5"
            >
              <span className="block h-px w-6 rotate-45 transform bg-black transition-transform" />
              <span className="block h-px w-6 -translate-y-1.5 -rotate-45 transform bg-black transition-transform" />
            </button>
          </div>
          <nav className="flex flex-col items-center px-4 pt-8 text-center">
            {navigation.map((item) => (
              <div key={item.name} className="mb-6">
                <Link
                  href={item.href}
                  className="text-3xl font-light uppercase"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="mt-4 space-y-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-lg text-gray-600"
                        onClick={onClose}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
