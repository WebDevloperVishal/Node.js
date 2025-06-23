
## 📘 Node.js `http` Module – Full Notes

The `http` module in Node.js allows you to create an **HTTP server** and **make HTTP requests**. It is part of the **core module**, so you don’t need to install it using npm.

---

## 🔹 Importing `http` Module

```js
const http = require('http');
```

---

## 🔹 Creating a Basic HTTP Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

---

## 🧠 Breakdown of `createServer`

* `req`: Incoming message (HTTP request object)
* `res`: Server response object
* `res.writeHead(statusCode, headers)`: Sets response headers
* `res.end(data)`: Ends the response and sends data back to the client

---

## 🔹 Responding Based on Route

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000);
```

---

## 🔹 Handling JSON Response

```js
const http = require('http');

const server = http.createServer((req, res) => {
  const data = { name: 'Code Snippet', language: 'JavaScript' };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});

server.listen(3000);
```

---

## 🔹 Handling Query Params

```js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true = parse query string
  const name = parsedUrl.query.name;

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name || 'Guest'}!`);
});

server.listen(3000);
```

Try this: `http://localhost:3000/?name=Code`

---

## 🔹 Making HTTP Requests (Client)

### GET Request

```js
const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(JSON.parse(data)));
});
```

### POST Request

```js
const http = require('http');

const data = JSON.stringify({ title: 'foo', body: 'bar', userId: 1 });

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let responseData = '';
  res.on('data', (chunk) => responseData += chunk);
  res.on('end', () => console.log(JSON.parse(responseData)));
});

req.write(data);
req.end();
```

---

## 🔹 Events in `http.Server`

| Event           | Description                          |
| --------------- | ------------------------------------ |
| `request`       | Emitted when a request is received   |
| `connection`    | When a new TCP stream is established |
| `close`         | When the server is closed            |
| `checkContinue` | Client sends `Expect: 100-continue`  |

Example:

```js
server.on('request', (req, res) => {
  console.log('New request received');
});
```

---

## 🔹 Streaming Response Example

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./bigfile.txt');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  stream.pipe(res);
});

server.listen(3000);
```

---

## ✅ Summary

| Function              | Purpose                     |
| --------------------- | --------------------------- |
| `http.createServer()` | Create a server             |
| `res.writeHead()`     | Set status and headers      |
| `res.end()`           | End and send response       |
| `http.get()`          | Perform a GET request       |
| `http.request()`      | Perform custom HTTP request |

---

## 📦 Alternatives

* Use `express.js` for simpler and faster development
* For production-grade apps, use `cluster`, `https`, and proper logging