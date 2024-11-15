export function getAssetPath(path: string): string {
  const basePath = process.env.GITHUB_ACTIONS ? '/new-portfolio' : '';
  return `${basePath}${path}`;
}
