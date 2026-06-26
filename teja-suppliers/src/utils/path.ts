const BASE_PATH = "/Development-of-a-Responsive-Business-Website";

export function getAssetPath(path: string): string {
  if (!path) return "";
  // If it's already an absolute URL or has base path, return it as is
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith(BASE_PATH)) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_PATH}/${cleanPath}`;
}
