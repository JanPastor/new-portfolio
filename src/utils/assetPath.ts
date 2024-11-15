export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), add the repository name prefix
  if (process.env.GITHUB_ACTIONS) {
    const repo = 'new-portfolio';
    return `/${repo}/${cleanPath}`;
  }
  
  // In development, just return the path with a leading slash
  return `/${cleanPath}`;
}
