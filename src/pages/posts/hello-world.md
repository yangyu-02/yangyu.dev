---
layout: ../../layouts/Layout.astro
title: "Hello World"
description: "First post on my new blog"
date: "2024-01-15"
---

# Hello World

<div class="margin-date">Jan 15, 2024</div>

I've been meaning to start writing more, so here's my new blog.

I'll probably write about programming, things I'm learning, and projects I'm working on. Nothing too fancy - just a place to put thoughts down.

The blog is built with [Astro](https://astro.build), which I'm enjoying so far. Simple and fast.

Here's a quick Python snippet I was working with today:

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

Nothing groundbreaking, but it's nice to have a place to share these little snippets. More posts coming soon! 