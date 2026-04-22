
import fs from 'fs';
import fetch from 'node-fetch';

const API = 'https://yoursite.com/wp-json/wp/v2/posts';

async function build() {
  const posts = await fetch(API).then(r => r.json());

  fs.mkdirSync('dist/post', { recursive: true });

  // index
  const indexHTML = posts.map(p => `<h2>${p.title.rendered}</h2>`).join('');
  fs.writeFileSync('dist/index.html', indexHTML);

  // posts
  posts.forEach(p => {
    const dir = `dist/post/${p.slug}`;
    fs.mkdirSync(dir, { recursive: true });
    const html = `<h1>${p.title.rendered}</h1>${p.content.rendered}`;
    fs.writeFileSync(`${dir}/index.html`, html);
  });

  console.log('Build complete');
}

build();
