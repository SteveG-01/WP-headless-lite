
const routes = [];

export function register(path, handler) {
  routes.push({ path, handler });
}

function match(pathname) {
  for (let r of routes) {
    const keys = [];
    const pattern = r.path.replace(/:([^/]+)/g, (_, k) => {
      keys.push(k);
      return '([^/]+)';
    });
    const match = pathname.match(new RegExp(`^${pattern}$`));
    if (match) {
      const params = {};
      keys.forEach((k, i) => params[k] = match[i + 1]);
      return { handler: r.handler, params };
    }
  }
}

export async function render() {
  const root = document.querySelector('#app');
  const m = match(location.pathname);
  if (!m) return root.innerHTML = '<h1>404</h1>';
  root.innerHTML = await m.handler(m.params);
}

export function start() {
  render();
  window.addEventListener('popstate', render);
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-link]');
    if (!a) return;
    e.preventDefault();
    history.pushState({}, '', a.getAttribute('href'));
    render();
  });
}
