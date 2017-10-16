# Markdown
> [Markdown](https://en.wikipedia.org/wiki/Markdown) is a markup language with plain text formatting syntax. It is designed so that it can be converted to HTML.

Markdown syntax is converted into HTML code which can then be viewed in the browser. All I had to do was make sure I wrote styles for whatever the markdown converter was capable of outputting.

### Paragraphs
Markdown takes any plain text written and separates it into `<p>` paragraphs at every blank line.

```md
This is a paragraph.

This is a paragraph too!
```

### Strong text
In markdown you can wrap any bit of text in double asterisks to make it `<strong>`.

> The HTML `<strong>` element gives text strong importance, and is typically displayed in bold.


Let's see that in action:
```md
This word will be **strong**!
```
This word will be **strong**!

### Emphasis
In markdown you can wrap any bit of text in single asterisks to make it emphasized `<em>`.

>  The HTML `<em>` element marks text that has stress emphasis.

Let's see that in action:
```md
This word will *emphasized*!
```
This word will *emphasized*!

### Strong emphasis
You can combine strong and emphasized text:

```md
Let's combine ***strong and em***!
```
Let's combine ***strong and em***!

### Links
In markdown you can create links easily:
```md
This will become [a link](http://example.com)!
```
This will become [a link](http://example.com)!

### Headers
Markdown can output every header from `h1` to `h6`:
```md
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

I've styled `h4`, `h5`, and `h6` in the same way since I don't really need that many different headings.

### Code snippets
Code snippets can either be inline or as a perforated block:

```md
This will become an `inline code bit`!
```
This will become an `inline code bit`!

Wrapping text in &#768;&#768;&#768; (triple back quotes) turns it into a perforated code block.

### Lists
Lists can take two forms — ordered and unordered. Both lists are set flush left to avoid ugly indents.

```
- I'm an unordered list
- Foo
- Bar

1. I'm an ordered list
1. Foo
1. Bar
```

- I'm an unordered list
- Foo
- Bar


1. I'm an ordered list
1. Foo
1. Bar

### Blockquotes
In markdown `blockquote`s can be created by prefixing text with a `>` (greater than sign):

```md
> Strive not to be a success, but rather to be of value.  
~ Albert Einstein

```
The result:
> Strive not to be a success, but rather to be of value.  
~ Albert Einstein

### Tables
Tables can also be created in markdown. These are a little bit trickier:

```
| Header 1 | Header 2 | Header 3 |
| --- | --- | --- |
| Row 1 value 1 | Row 1 value 2 | Row 1 value 3 |
| Row 2 value 1 | Row 2 value 2 | Row 2 value 3 |
| Row 3 value 1 | Row 3 value 2 | Row 3 value 3 |
```

The result:

| Header 1 | Header 2 | Header 3 |
| --- | --- | --- |
| Row 1 value 1 | Row 1 value 2 | Row 1 value 3 |
| Row 2 value 1 | Row 2 value 2 | Row 2 value 3 |
| Row 3 value 1 | Row 3 value 2 | Row 3 value 3 |

### Images
Images can be inlined using a syntax much like the syntax of a link:
```
![image alt text](https://source.unsplash.com/9IBqihqhuHc/500x300)
```
Note the `!` in front of the link syntax.

![image](https://source.unsplash.com/9IBqihqhuHc/500x300)

**Alternatively images can be put into a `.image-container`**. This will cause the images to be aligned in a grid on bigger screen sizes.

This is actually done by inlining some actual `HTML` into a markdown file, which is totally accepted.

```
<div class="image-container">
  <img src="https://source.unsplash.com/Pqh8WGC_i9k/500x300" alt="img">
  <img src="https://source.unsplash.com/Zrzf2XMx6tg/500x300" alt="img">
  <img src="https://source.unsplash.com/t1Sp-gwFAPg/500x300" alt="img">
</div>
```
<div class="image-container">
  <img src="https://source.unsplash.com/Pqh8WGC_i9k/500x300" alt="img">
  <img src="https://source.unsplash.com/Zrzf2XMx6tg/500x300" alt="img">
  <img src="https://source.unsplash.com/t1Sp-gwFAPg/500x300" alt="img">
</div>

When using this `.image-container` you should be mindful of the sizes of the images you select. Selecting varying sizes can cause a weirdly aligned layout.
