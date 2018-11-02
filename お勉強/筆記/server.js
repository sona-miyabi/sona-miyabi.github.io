const http=require('http')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf8');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
  res.end('<!doctype html><html><body><button>我的個人網站</button></body></html>');

});

server.listen(81)