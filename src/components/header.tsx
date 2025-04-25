import { getGalleryNavItems } from "@/utils/server"
import { HeaderClient } from "@/components/header-client"

export async function Header() {
  const galleries = getGalleryNavItems()
  return <HeaderClient galleries={galleries} />
}
