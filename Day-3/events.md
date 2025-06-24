## 🎯 What are Events in Node.js?

* Node.js is **event-driven** — it uses an **event loop** and **callback architecture**.
* The core of this system is the **`EventEmitter`** class, found in the **`events` module**.
* It allows **one part of your app to emit an event**, and **other parts to listen and react** to that event.

---

## ✅ Importing and Using `EventEmitter`

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
```

Once you've created an `emitter`, you can:

* **Listen** for events using `.on()`
* **Emit** events using `.emit()`

---

## 📌 `.on(eventName, callback)`

* **Listens** for a specific event.
* When the event is emitted, it runs the provided **callback**.
* You can attach **multiple listeners** to the same event.

---

## 📌 `.emit(eventName, [...args])`

* **Emits/triggers** an event.
* You can pass any number of arguments to be received by the listeners.

---

## 💡 Basic Example

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listen for 'greet' event
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit 'greet' event
emitter.emit('greet', 'Code Snippet');
```

🟢 **Output:**

```
Hello, Code Snippet!
```

---

## ⚙️ Real-World Style Example: File Upload Tracker

```js
const EventEmitter = require('events');
const uploader = new EventEmitter();

// Listener for 'start'
uploader.on('start', (fileName) => {
  console.log(`📤 Upload started: ${fileName}`);
});

// Listener for 'progress'
uploader.on('progress', (percent) => {
  console.log(`⏳ Upload progress: ${percent}%`);
});

// Listener for 'end'
uploader.on('end', () => {
  console.log('✅ Upload complete!');
});

// Simulate an upload
uploader.emit('start', 'image.png');
uploader.emit('progress', 20);
uploader.emit('progress', 60);
uploader.emit('progress', 100);
uploader.emit('end');
```

🟢 **Output:**

```
📤 Upload started: image.png
⏳ Upload progress: 20%
⏳ Upload progress: 60%
⏳ Upload progress: 100%
✅ Upload complete!
```

---

## 📍 Key Notes:

### 🔁 Multiple Listeners

You can add multiple `.on()` listeners for the **same event**:

```js
emitter.on('ping', () => console.log('ping 1'));
emitter.on('ping', () => console.log('ping 2'));

emitter.emit('ping');
```

🟢 Output:

```
ping 1
ping 2
```

### ❌ If no listeners are attached?

If you `emit()` an event with **no listeners**, nothing happens (no error, just silent).

---

## 🧠 Summary

| Method                           | Purpose                                                |
| -------------------------------- | ------------------------------------------------------ |
| `emitter.on(event, callback)`    | Register a listener function for an event              |
| `emitter.emit(event, [...args])` | Emit/trigger the event and pass arguments to listeners |
