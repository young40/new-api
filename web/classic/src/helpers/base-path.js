export const BASE_PATH = (
  import.meta.env.VITE_BASE_PATH || '/'
).replace(/\/+$/, '') || '';

export const BASE_PATH_WITH_SLASH = BASE_PATH ? `${BASE_PATH}/` : '/';

export function withBasePath(path) {
  if (!BASE_PATH) return path;
  return `${BASE_PATH}${path}`;
}
