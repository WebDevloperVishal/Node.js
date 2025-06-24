# Node.js OS Module

## 🧠 What is the `os` module?

* The `os` module in Node.js provides a number of **operating system-related utility methods** and properties.
* It is **cross-platform**, but note that some methods return different values depending on the OS.

### ✅ How to import:

```js
const os = require('os');
```

---

## 🔍 Overview of Important Methods

| Method                   | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `os.arch()`              | Returns CPU architecture                        |
| `os.platform()`          | Returns the operating system platform           |
| `os.cpus()`              | Returns information about each logical CPU core |
| `os.freemem()`           | Returns amount of free system memory in bytes   |
| `os.totalmem()`          | Returns total memory in bytes                   |
| `os.hostname()`          | Returns the hostname                            |
| `os.type()`              | Returns the OS name                             |
| `os.release()`           | Returns the OS release                          |
| `os.uptime()`            | Returns system uptime in seconds                |
| `os.networkInterfaces()` | Returns network interfaces info                 |
| `os.userInfo()`          | Returns current user info                       |
| `os.homedir()`           | Returns home directory of the current user      |
| `os.tmpdir()`            | Returns path to OS's temp directory             |
| `os.endianness()`        | Returns endianness of CPU ("BE" or "LE")        |
| `os.EOL`                 | Returns OS-specific end-of-line marker          |

---

## 🔧 OS Module Methods with Code Examples

### 1. `os.arch()`

Returns the **CPU architecture**: `'x64'`, `'arm'`, etc.

```js
const os = require('os');
console.log('Architecture:', os.arch()); // 'x64'
```

---

### 2. `os.platform()`

Returns the **platform** the code is running on: `'win32'`, `'linux'`, `'darwin'`, etc.

```js
console.log('Platform:', os.platform()); // 'win32' on Windows
```

---

### 3. `os.cpus()`

Returns an **array of objects** containing info about each logical CPU core.

```js
const cpus = os.cpus();
console.log('CPU Info:', cpus);
console.log(`You have ${cpus.length} CPU cores`);
```

---

### 4. `os.freemem()` and `os.totalmem()`

Returns memory in **bytes**. You can convert it to MB/GB:

```js
console.log('Free Memory:', (os.freemem() / 1024 / 1024).toFixed(2), 'MB');
console.log('Total Memory:', (os.totalmem() / 1024 / 1024).toFixed(2), 'MB');
```

---

### 5. `os.hostname()`

Returns the system's **host name**.

```js
console.log('Hostname:', os.hostname());
```

---

### 6. `os.type()` and `os.release()`

```js
console.log('OS Type:', os.type()); // 'Windows_NT', 'Linux', 'Darwin'
console.log('OS Release:', os.release()); // e.g. '10.0.22621'
```

---

### 7. `os.uptime()`

Returns the system uptime in **seconds**:

```js
const uptime = os.uptime();
console.log(`System Uptime: ${Math.floor(uptime / 3600)} hours`);
```

---

### 8. `os.networkInterfaces()`

Returns an object containing **network interface info**.

```js
const interfaces = os.networkInterfaces();
console.log('Network Interfaces:', interfaces);
```

Example: To get all IPv4 addresses:

```js
Object.values(os.networkInterfaces()).forEach(net => {
  net.forEach(interface => {
    if (interface.family === 'IPv4' && !interface.internal) {
      console.log('IP Address:', interface.address);
    }
  });
});
```

---

### 9. `os.userInfo()`

Gives information about the **currently logged-in user**.

```js
const user = os.userInfo();
console.log('Username:', user.username);
console.log('Home Directory:', user.homedir);
```

---

### 10. `os.homedir()` and `os.tmpdir()`

```js
console.log('Home Directory:', os.homedir());
console.log('Temporary Directory:', os.tmpdir());
```

---

### 11. `os.endianness()`

Returns **byte order** used by the CPU: `'BE'` or `'LE'`.

```js
console.log('Endianness:', os.endianness()); // 'LE' for most systems
```

---

### 12. `os.EOL`

Returns the **end-of-line character(s)** for the current OS.

```js
const EOL = os.EOL;
console.log(`First Line${EOL}Second Line`);
```

On Windows: `\r\n`
On Unix/Linux: `\n`

---

## 🧪 Sample Script to Display All OS Info

```js
const os = require('os');

console.log('🖥️ System Information');
console.log('----------------------');
console.log('Hostname:', os.hostname());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('OS Type:', os.type());
console.log('Release:', os.release());
console.log('Uptime:', (os.uptime() / 60).toFixed(2), 'minutes');
console.log('CPU Cores:', os.cpus().length);
console.log('Total Memory:', (os.totalmem() / 1024 / 1024).toFixed(2), 'MB');
console.log('Free Memory:', (os.freemem() / 1024 / 1024).toFixed(2), 'MB');
console.log('User Info:', os.userInfo());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());
console.log('Endianness:', os.endianness());
console.log('EOL Marker:', JSON.stringify(os.EOL));
```

---

## 🧑‍💻 Use Cases

* Logging system diagnostics
* CLI tool introspection
* Environment-based decisions (e.g., platform-specific behavior)
* Monitoring tools
* Generating config paths based on user home dir or temp dir
