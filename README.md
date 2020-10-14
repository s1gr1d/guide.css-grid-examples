# CSS Grid Layout

The CSS-Grid lets you define a two-dimensional layout of columns and rows. You can then place elements within the grid, which may fill one cell or multiple columns or rows.

## Grid Terminology

- **Grid Container:** The element on which `display: grid` is applied. It's the direct parent of all grid items.
- **Grid Item:** The children of the grid container. Non-direct descendants are **no** grid items.
- **Grid Line:** Make up the structure of the grid. Can be vertical or horizontal. Numbered beginning with `1`. The last line also has number `-1`, counting back in.
- **Grid Cell:** Intersection of two rows and columns.
- **Grid Track:** The rows or columns between two grid lines.
- **Grid Area:** One or more adjacent grid cells that define a rectangle.

![grid-parts-terms](images/grid-parts-terms.png)

## A basic grid

Following code creates a 2x2 grid with green items. A grid container always **behaves like a block display element**, filling 100% of the available width. After declaring the grid-template properties, the grid gets filled with the children of the container.

The **length unit `fr` (fraction)** behaves like the `flex-grow` factor in flexbox and slices the grid up into proportional columns or rows. You could also define the columns/rows in this example with  `25%` percent each, but this has two issues: we have to calculate the amount of percent by ourselves and by adding a `grid-grap` we get problems with overflow, as our grid gets wider as `100%`.

```html
<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</div>
```

```css
.container {
    display: grid;
    grid-template-columns: 130px 1fr;
    grid-template-rows: 1fr 1fr; 
    grid-gap: 0.5em;
}
.container > * {
    padding: 2em;
    background-color: green;
}
```
Result:

![basic-grid](images/basic-grid.png)

## Positioning Grid Items

Grid items are positioned with `grid-row` and `grid-column`. 

For positioning a grid item in a specific cell you can write something like this:

```
.item {
	grid-column: 2;
    grid-row: 3;
}
```

For **spanning the item over a specific area**, you can write following syntax to take three rows and two columns:

```
.item {
    grid-column: 3 / span 2;
    grid-row: 2 / 5;
}
```

`span` tells the browser how many grid tracks the item should span, without specifying an explicit grid line. As the last grid line in the grid has the number `-1`, we can **span an item all over** e.g. a row track with `grid-column: 1 / -1`.

## Alternate Syntaxes

You can position the items on the grid by naming the **grid lines** or the **grid areas**. Choosing between these two and the standard syntax is a matter of preference. 

In summary, there are three different syntaxes: line numbers, named grid lines, named grid areas.

### Naming Grid Lines

You can give the grid lines a name by using **bracket syntax**. For *better readability*, you can add *line breaks and indentation*. It is best practice to write a name that describes the name of the content in the track.

```css
.container {
  grid-template-columns: [grid-start] 40px 50px auto 40px 
      					 [grid-end];
  grid-template-rows: [header-start] 100px 
                      [header-end box-start] 200px 
                      [box-end main-start] 400px 
                      [main-end footer-start] 100px 
                      [footer-end];
}

.item {
  grid-column: 2 / grid-end;
  grid-row: box-start / main-end;
}
```

### Naming Grid Areas

Instead of using the grid lines, you can use named areas for positioning the items.  This can be done by adding the property `grid-template-areas`. 

It is important that **every named grid area forms a rectangle**. By using a period as a name you can define an **empty grid cell**. 
For better readability, the names are separated with a tab (or a lot of spaces).

````css
.container {
    grid-template-rows: 100px 200px 400px 100px;
    grid-template-columns: repeat(3, 1fr) 200px;    
    grid-template-areas: "  . 	head 	head	. "
                         "box-1 box-2 	box-3 	side"
                         "main  main  	main  	side"
                         "foot  foot  	foot  	foot";
}
````

## Implicit and Explicit Grid

-- TODO: explanation

## Grid Examples from Practice

-- TODO: add common use-cases and examples

## Links

[CSS Grid Specification (W3C)](https://drafts.csswg.org/css-grid/)

[CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

[WebKit Blog - Grid Layout ](https://webkit.org/blog/7434/css-grid-layout-a-new-layout-module-for-the-web/)

[Book: CSS in Depth](https://www.manning.com/books/css-in-depth)

