const envs = import.meta.env;

export default {
  publicApi: envs.VITE_PUBLIC_API_KEY,
  privateApi: envs.VITE_PRIVATE_API_KEY,
  baseApiUrl: envs.VITE_BASE_API_URL
};
