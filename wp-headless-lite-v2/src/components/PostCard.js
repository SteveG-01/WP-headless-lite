
import { html } from '../core/html.js';

export function PostCard(post) {
  return html`
    <article>
      <h2><a href="/post/${post.slug}" data-link>${post.title.rendered}</a></h2>
      <div>${post.excerpt.rendered}</div>
    </article>
  `;
}
