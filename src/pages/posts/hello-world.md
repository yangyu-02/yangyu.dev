---
layout: ../../layouts/Layout.astro
title: "Hello World"
description: "First post on my new blog"
date: "2024-01-15"
---

# Hello World

<div class="margin-date">Published on: 2025-05-26</div>

test python code

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
```

And some JavaScript:

```javascript
const posts = await fetch('/api/posts')
  .then(res => res.json())
  .catch(err => console.error('Failed to load posts:', err));

posts.forEach(post => {
  console.log(`${post.title} - ${post.date}`);
});
```
