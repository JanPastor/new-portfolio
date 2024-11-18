export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we're in GitHub Actions environment
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  
  if (isGithubActions) {
    // Use the same repo name as in next.config.ts
    const repo = 'new-portfolio';
    return `/${repo}/${cleanPath}`;
  }
  
  // In development, just return the path with a leading slash
  return `/${cleanPath}`;
}
