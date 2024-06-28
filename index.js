
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.hasHeader('content-type', 'text/plain');
//     res.end('Hello world!\n');
// });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1 style="color: green">Hello World!</h1>');
    // res.write('<p>I wonder what else we can send...</p>');
    // res.end();
    if (req.url === '/') {
        // Default route
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
        res.end();
      } else if (req.url === '/about') {
        // About route
        res.write('<h1>About Page</h1>');
        res.write('<p>This is the about page.</p>');
        res.end();
      } else if (req.url === '/contact') {
        // Contact route
        res.write('<h1>Contact Page</h1>');
        res.write('<p>Contact us at contact@example.com</p>');
        res.end();
      } else {
        // 404 Not Found
        res.statusCode = 404;
        res.write('<h1>404 Not Found</h1>');
        res.write('<p>The page you are looking for does not exist.</p>');
        res.end();
      }
   
  });

server.listen(port,hostname, () => {
    console.log('server running at http://${hostname}:${port}/')
} 
);