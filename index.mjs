import createServer from '@tomphttp/bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';

const routes = [
  { path: '/', file: 'who-let-him-cook.html' },
  { path: '/news', file: 'apps.html' },
  { path: '/events', file: 'games.html' },
  { path: '/diagnostic', file: 'settings.html' },
  { path: '/local-news', file: 'tabs.html' },
  { path: '/image-galleries', file: 'go.html' },
  { path: '/blog', file: 'widget.html' },
  { path: '/home', file: 'home.html' },
  { path: '/contact', file: 'contact.html' },
  { path: '/about', file: 'about.html' },
];

const bare = createServer('/bare/');
const serve = new nodeStatic.Server('static/');

const server = http.createServer();

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    serve.serve(req, res);
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req, socket, head)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
