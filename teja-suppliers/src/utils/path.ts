export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  
  const clean = path.startsWith("/") ? path : "/" + path;
  
  // If we are in the browser and loading via file:// protocol
  if (typeof window !== "undefined" && window.location.protocol === "file:") {
    const pathname = window.location.pathname;
    let prefix = "";
    
    // Check if the current file is inside a subdirectory
    if (
      pathname.includes("/login/") || 
      pathname.endsWith("/login") || 
      pathname.includes("/privacy/") || 
      pathname.endsWith("/privacy") || 
      pathname.includes("/terms/") || 
      pathname.endsWith("/terms") || 
      pathname.includes("/_not-found/") || 
      pathname.endsWith("/_not-found")
    ) {
      prefix = "../";
    }
    
    // Return relative path by removing the leading slash from the clean path
    return prefix + clean.slice(1);
  }
  
  const BASE_PATH = "/Development-of-a-Responsive-Business-Website";
  if (clean.startsWith(BASE_PATH)) {
    return clean;
  }
  return BASE_PATH + clean;
}


