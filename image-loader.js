export default function myImageLoader({ src }) {
  return src.startsWith('/') ? `/gog${src}` : src
}
