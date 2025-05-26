---
layout: ../layouts/Layout.astro
title: "Style Guide - Debug"
description: "Hidden style guide for debugging"
date: "2024-01-01"
---

# Style Guide & Debug Page

<div class="margin-date">Debug Mode</div>

*This page showcases all styling elements. URL: /debug-styles-a8f2b9c1*

---

## Typography Hierarchy

# Heading 1 - Main Page Title
## Heading 2 - Section Headers  
### Heading 3 - Subsections

Regular paragraph text with normal line height and spacing. This shows the default text color and Georgia serif font family.

**Bold text** and *italic text* for emphasis.

---

## Links and Navigation

Here are different types of links:
- [Internal link to home](/)
- [Internal link to posts](/posts)
- [External link](https://example.com)
- [Email link](mailto:test@example.com)

---

## Code Elements

### Inline Code
Here's some inline code: `const variable = 'value'` and `npm install` and `.astro` files.

### Code Blocks

Python example:
```python
def hello_world():
    """A simple greeting function"""
    name = "World"
    message = f"Hello, {name}!"
    print(message)
    return message

# Call the function
result = hello_world()
```

JavaScript example:
```javascript
class Example {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hello from ${this.name}!`);
    }
}

const example = new Example('JavaScript');
example.greet();
```

HTML example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is an example.</p>
</body>
</html>
```

---

## Lists

### Unordered Lists
- First item
- Second item with **bold text**
- Third item with `inline code`
- Fourth item with a [link](#)
- Nested list:
  - Nested item 1
  - Nested item 2

### Ordered Lists
1. First step
2. Second step
3. Third step with *emphasis*
4. Final step

---

## Blockquotes

> "This is a blockquote. It should have different styling from regular paragraphs, typically with a left border and muted text color."

> "Here's another quote to show multiple blockquotes. This one is longer to demonstrate how the styling works with more text content that wraps to multiple lines."

---

## Color Palette

This design uses:

- **Primary Orange** (`#D97706`) - Navigation badge, dates, code borders
- **Complementary Blue** (`#1E40AF`) - Links and interactive elements  
- **Warm Cream** (`#fffbf5`) - Background for a softer feel
- **Dark Gray** (`#333`) - Main text for excellent readability
- **Muted Gray** (`#666`) - Secondary text and quotes

The orange-blue combination is based on complementary color theory - colors opposite each other on the color wheel create maximum contrast and visual interest while remaining harmonious.

---

## Margin Date Example

<div class="margin-date">Jan 15, 2024</div>

This paragraph demonstrates how the margin date appears. The date should float in the right margin on desktop and appear below on mobile.

---

## Layout Testing

This section tests the overall layout constraints:

- **Max width:** 750px
- **Padding:** 0 80px 0 20px (extra right padding for margin dates)
- **Font:** Georgia serif
- **Line height:** 1.6

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

---

## Responsive Behavior

On screens smaller than 800px:
- Container padding changes to 0 20px
- Margin dates become static and right-aligned
- Layout remains readable and functional

*Resize your browser window to test responsive behavior.*

---

## Mixed Content Test

Here's a paragraph with **bold**, *italic*, `inline code`, and [a link](/). 

Some technical terms: `Array.map()`, `fetch()`, `async/await`, and `console.log()`.

### Code with explanation

This Python function demonstrates recursion:

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # Output: 120
```

And here's the same logic in JavaScript:

```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

Perfect for testing syntax highlighting across different languages! 