const http = require('http');

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>welcome to home page ?</h1>');
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>welcome to about page</h1>');

    const response = {
      success: true,
      data: users
    };

    res.write(JSON.stringify(response));
    res.end();
  } else if (req.method === 'POST' && req.url === '/users') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const userData = JSON.parse(body);
      users.push(userData);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, data: userData }));
    });
  } else if (req.url === '/users' && req.method === 'GET') {
    const response = {
      success: true,
      data: users
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
    const response = {
      success: false,
      message: 'Page not found'
    };

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
})