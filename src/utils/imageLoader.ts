export default function imageLoader({ src }: { src: string }): string {
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  const cleanPath = src.startsWith('/') ? src.slice(1) : src;
  
  if (isGithubActions) {
    return `/new-portfolio/${cleanPath}`;
  }
  
  return `/${cleanPath}`;
}
