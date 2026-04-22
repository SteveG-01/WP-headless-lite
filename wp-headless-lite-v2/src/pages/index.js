
import { API } from '../core/api.js';
import { layout } from '../core/layout.js';
import { PostCard } from '../components/PostCard.js';

export default async function page() {
  const posts = await API.getPosts();
  return layout(posts.map(PostCard).join(''));
}
