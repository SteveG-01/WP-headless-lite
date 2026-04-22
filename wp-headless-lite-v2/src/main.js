
import { register, start } from './core/router.js';
import home from './pages/index.js';
import single from './pages/post/[slug].js';

register('/', home);
register('/post/:slug', single);

start();
