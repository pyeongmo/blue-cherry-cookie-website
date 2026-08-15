interface ImageModule {
  default: string | { src: string }
}

const images = import.meta.glob<ImageModule>('../assets/gigs/**/*.{jpg,jpeg,png,webp,svg}', {
  eager: true,
})

export const getGigImageUrl = (path: string): string => {
  const globPath = path.replace('/src/assets/', '../assets/')
  const image = images[globPath]

  if (!image) return path

  return typeof image.default === 'string' ? image.default : image.default.src
}
