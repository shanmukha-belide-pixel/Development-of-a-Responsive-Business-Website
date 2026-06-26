export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const BASE_PATH = "/Development-of-a-Responsive-Business-Website";
  let cleanPath = path;
  if (cleanPath.startsWith(BASE_PATH)) {
    cleanPath = cleanPath.slice(BASE_PATH.length);
  }
  if (cleanPath.startsWith("/")) {
    cleanPath = cleanPath.slice(1);
  }
  return cleanPath;
}

