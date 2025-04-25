export function isImageFilename(filename: string) {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(filename)
}
