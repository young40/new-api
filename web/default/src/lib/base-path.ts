export const BASE_PATH: string = (
  (import.meta as any).env.VITE_BASE_PATH || '/'
).replace(/\/+$/, '') || '';

export const BASE_PATH_WITH_SLASH: string = BASE_PATH ? `${BASE_PATH}/` : '/';

export function withBasePath(path: string): string {
  if (!BASE_PATH) return path;
  return `${BASE_PATH}${path}`;
}
