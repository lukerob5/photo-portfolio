import Link from "next/link"
import { CameraOff } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-8 text-center">
      <h2 className="mb-4 text-2xl font-bold">Not Found</h2>
      <p className="mb-6 text-gray-600">This frame seems to be missing.</p>
      <div className="mb-6">
        <CameraOff className="h-16 w-16 animate-pulse text-gray-500" />
      </div>
      <Link
        href="/"
        className="rounded bg-gray-200 px-4 py-2 transition-colors hover:bg-gray-100"
      >
        Return to Gallery
      </Link>
    </div>
  )
}
