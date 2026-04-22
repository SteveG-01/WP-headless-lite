
import { API } from '../../core/api.js';
import { layout } from '../../core/layout.js';

export default async function page({ slug }) {
  const post = await API.getPost(slug);
  if (!post) return layout('<h1>Not found</h1>');
  return layout(`
    <article>
      <h1>${post.title.rendered}</h1>
      ${post.content.rendered}
    </article>
  `);
}
