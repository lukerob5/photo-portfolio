"use client"

import { useEffect } from "react"
import { Film } from "lucide-react"

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-8 text-center">
      <h2 className="mb-4 text-2xl font-bold">Error</h2>
      <p className="mb-6 text-gray-600">
        This page is still in the darkroom. Please check back when it&apos;s
        developed!
      </p>
      <div className="mb-6 flex items-center gap-4">
        <Film className="h-16 w-16 animate-pulse text-gray-500" />
      </div>
    </div>
  )
}
