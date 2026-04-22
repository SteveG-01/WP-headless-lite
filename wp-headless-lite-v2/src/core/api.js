
import { CONFIG } from './config.js';

const cache = new Map();

async function fetchJSON(url) {
  if (cache.has(url)) return cache.get(url);
  const res = await fetch(url);
  const data = await res.json();
  cache.set(url, data);
  return data;
}

export const API = {
  getPosts: () => fetchJSON(`${CONFIG.API_ROOT}/posts`),
  getPost: (slug) => fetchJSON(`${CONFIG.API_ROOT}/posts?slug=${slug}`).then(d => d[0])
};
