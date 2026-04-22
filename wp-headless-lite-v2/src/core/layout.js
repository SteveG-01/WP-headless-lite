
export function layout(content) {
  return `
    <main class="site">
      <header><h1>WP Headless Lite</h1></header>
      <section>${content}</section>
      <footer><small>© Your Site</small></footer>
    </main>
  `;
}
