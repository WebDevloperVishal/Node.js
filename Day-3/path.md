## 🧠 What is the `path` Module?

* The `path` module provides utilities for working with **file and directory paths**.
* It automatically handles platform-specific path delimiters:

  * `/` on POSIX (Linux/macOS)
  * `\` on Windows

---

## ✅ How to Import

```js
const path = require('path');
```

---

## 📚 Common Methods in `path`

| Method              | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `path.basename()`   | Gets the file name from a path                          |
| `path.dirname()`    | Gets the directory name                                 |
| `path.extname()`    | Gets the file extension                                 |
| `path.join()`       | Joins all arguments into a single path                  |
| `path.resolve()`    | Resolves a sequence of paths into an absolute path      |
| `path.isAbsolute()` | Checks if a path is absolute                            |
| `path.relative()`   | Gets relative path from one path to another             |
| `path.normalize()`  | Normalizes path (removes `..`, `.`)                     |
| `path.parse()`      | Returns an object with root, dir, base, ext, name       |
| `path.format()`     | Reconstructs a path from an object (reverse of `parse`) |
| `path.sep`          | Path segment separator (`/` or `\`)                     |
| `path.delimiter`    | Path delimiter (`:` on UNIX, `;` on Windows)            |

---

## 🔧 Detailed Method Examples

---

### 1. `path.basename(path, [ext])`

Returns the **filename** from a full path. Optionally, remove the extension.

```js
console.log(path.basename('/users/docs/file.txt')); // 'file.txt'
console.log(path.basename('/users/docs/file.txt', '.txt')); // 'file'
```

---

### 2. `path.dirname(path)`

Returns the **directory name** of the path.

```js
console.log(path.dirname('/users/docs/file.txt')); // '/users/docs'
```

---

### 3. `path.extname(path)`

Returns the **extension** of the file.

```js
console.log(path.extname('index.html')); // '.html'
console.log(path.extname('/foo/bar.js')); // '.js'
```

---

### 4. `path.join([...paths])`

Joins all arguments into a **single normalized path**.

```js
const fullPath = path.join('/users', 'admin', 'file.txt');
console.log(fullPath); // '/users/admin/file.txt'
```

Handles `..` and `.` and removes redundant slashes:

```js
console.log(path.join('/foo', '..', 'bar')); // '/bar'
```

---

### 5. `path.resolve([...paths])`

Resolves paths to an **absolute path** starting from right to left.

```js
console.log(path.resolve('docs', 'file.txt'));
// '/Users/you/current-folder/docs/file.txt'

console.log(path.resolve('/foo', 'bar', 'baz'));
// '/foo/bar/baz'
```

Key difference from `join`:
`resolve()` treats any absolute path in the list as the new root.

---

### 6. `path.isAbsolute(path)`

Checks if a given path is **absolute**.

```js
console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('bar')); // false
```

---

### 7. `path.relative(from, to)`

Returns the **relative path** from one location to another.

```js
console.log(path.relative('/data/user/docs', '/data/user/photos'));
// '../../photos'
```

---

### 8. `path.normalize(path)`

Normalizes the path string by resolving `..`, `.`, and redundant slashes.

```js
console.log(path.normalize('/foo/bar//baz/../qux'));
// '/foo/bar/qux'
```

---

### 9. `path.parse(path)`

Returns an **object** with the root, dir, base, ext, and name.

```js
console.log(path.parse('/home/user/file.txt'));
/*
{
  root: '/',
  dir: '/home/user',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
```

---

### 10. `path.format(pathObject)`

Builds a path string from an object — reverse of `path.parse`.

```js
const obj = {
  dir: '/home/user',
  name: 'index',
  ext: '.js'
};
console.log(path.format(obj)); // '/home/user/index.js'
```

---

### 11. `path.sep` and `path.delimiter`

* `path.sep`: OS-specific path separator (`'/'` on POSIX, `'\\'` on Windows)
* `path.delimiter`: Used in PATH variables (`':'` POSIX, `';'` Windows)

```js
console.log('Path Separator:', path.sep);
console.log('Path Delimiter:', path.delimiter);
```

---

## 🧪 Practical Example

```js
const path = require('path');

const filePath = '/home/user/docs/tutorial.txt';

console.log('Dir name:', path.dirname(filePath));
console.log('Base name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));

const fullPath = path.join(__dirname, 'uploads', 'image.png');
console.log('Joined Path:', fullPath);

const resolvedPath = path.resolve('src', 'index.js');
console.log('Resolved Path:', resolvedPath);

console.log('Parsed:', path.parse(filePath));
console.log('Formatted:', path.format({
  dir: '/public/assets',
  name: 'logo',
  ext: '.svg'
}));
```

---

## 🧑‍💻 Real-World Use Cases

* 🔍 **Building file paths dynamically** (e.g., saving uploaded files)
* 📦 **Reading config or JSON files** using relative or absolute paths
* 🔐 **Normalizing paths** to prevent directory traversal attacks
* 🌐 **Cross-platform development** to ensure consistent path usage
* 🔄 **Converting between file path formats** for logs, displays, or references
