import createServer from '@tomphttp/bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';
import cors from 'cors';
import path from "path";

const server = http.createServer();
const app = express(server);
const __dirname = process.cwd();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/pages/index.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/pages/index.html'));
});

app.get('/apps', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/pages/apps.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/pages/about.html'));
});

app.get('/extras', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/pages/e.html'));
});

app.get('/edu', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/pages/edu.html'));
});

app.get('/games', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/pages/games.html'));
});

app.get('/s', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/pages/settings.html'));
});


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
