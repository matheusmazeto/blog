---
title: You Will Stop Using LocalStorage
date: '2019-04-25'
description: Goodbye LocalStorage, welcome Key-Value Storage!
tags:
  [
    'javascript',
    'js',
    'storage',
    'localstorage',
    'local storage',
    'kv storage',
    'key-value storage',
    'key-value',
    'key',
    'value',
    'kv',
    'google',
    'chrome',
    'wicg',
  ]
cover: './cover.jpg'
draft: false
---

When [LocalStorage](https://html.spec.whatwg.org/multipage/webstorage.html#the-localstorage-attribute) first appeared as part of HTML5 specification, web developers were excited because it exposed a simple way to save and retrieve data in and from the user's browser.

In this post, we will have a look at a new WICG proposal that aims to be a more performant alternative to LocalStorage.

> This blog post talks about a _potential_ future web platform feature called "KV Storage" (short for "Key-Value Storage"). This is currently a **proposal** made by the Web Incubator Community Group and it should **not** be used in production environments.

## The LocalStorage Interface

The LocalStorage interface allows the developer to store data in the browser in the form of key-value pairs, where both the key and the value are strings. The data is persisted across browser sessions and its scope is limited to the origin where the script that accesses LocalStorage resides.

### API

#### Saving Data

To save data to LocalStorage, simply call the `setItem(key, value)` method exposed by the `window.localStorage` object:

```javascript
if ('localStorage' in window) {
  localStorage.setItem('theme', 'dark');
}
```

If the data you are going to save is not a string, you have to serialize it before saving it:

```javascript
const serializedData = JSON.stringify(myData);
localStorage.setItem('data', serializedData);
```

#### Retrieving Data

To retrieve data, call the `getItem(key)` method exposed by `window.localStorage`:

```javascript
let savedTheme;

if ('localStorage' in window) {
  savedTheme = localStorage.getItem('theme');
}
```

Following the previous code snippet, `savedTheme` should hold the value `"dark"`.

Again, if the value you stored was not originally a string, you have to deserialize it:

```javascript
const serializedData = localStorage.getItem('data');
const myData = JSON.parse(serializedData);
```

### Cons of LocalStorage

As we have seen, the LocalStorage API is very simple, but a few non-negligible drawbacks are present:

- Only strings can be saved; to handle with non-string data, we have to manually perform serialization and deserialization
- `getItem` and `setItem` are synchronous: calling them blocks the main thread, and this potentially prevents the page from being interactive

The only asynchronous alternative to LocalStorage currently available is IndexedDB, which is definitely not known for its ease of use.

## The KV Storage Proposal

Key-Value Storage is a [proposal](https://wicg.github.io/kv-storage/) made by the Web Incubator Community Group (WICG) that aims to address the drawbacks of LocalStorage we have just mentioned. The specification mandates that it gets implemented by browser vendors as a built-in module and that it uses [IndexedDB](https://www.w3.org/TR/IndexedDB/) as its backing store.

Let's see an example usage of the KV Storage API, as provided by the specification:

```javascript
import { storage } from 'std:kv-storage';

(async () => {
  await storage.set('mycat', 'Tom');
  console.assert((await storage.get('mycat')) === 'Tom');

  for await (const [key, value] of storage.entries()) {
    console.log(key, value);
  }

  await storage.delete('mycat');
  console.assert((await storage.get('mycat')) === undefined);
})();
```

As we can see, `set` and `get` APIs are the equivalent for LocalStorage's `setItem` and `getItem`, but they are _asynchronous_. This means that the main JS thread is not blocked while the data is being fetched or persisted 😄

### Try KV Storage Today

If you are curious to experiment today with KV Storage, you have two possibilities:

- Use this [KV Storage polyfill](https://github.com/GoogleChromeLabs/kv-storage-polyfill)
- Install Chrome 74+ and enable this feature for specific web domains by registering interest in the [KV Storage origin trial](https://developers.chrome.com/origintrials/#/trials/active)

As you guess, the only web engine currently supporting KV Storage is Chromium from version 74. All web browsers based on Chromium v74+ (such as Google Chrome, Opera and Edge Dev) inherits this feature.
