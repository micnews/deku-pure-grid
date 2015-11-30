# deku-pure-grid

Grid component for [deku](https://github.com/dekujs/deku), using [pure.css](https://github.com/yahoo/pure) grid system.

## Install
```shell
npm install deku-pure-grid
```

## Grid component
The main container for your grid.

### Attributes

### `class=[class list]`
Adds any custom class to the grid element.

## Cell component
The container for each grid cell.

### Attributes

### `class=[class list]`
Adds any custom class to the cell element.

#### `size=[value]`
Adds class `pure-u-[value]`. Default, no media query.

#### `smSize=[value]`
Adds class `pure-u-small-[value]`. --small-min media query.

#### `mdSize=[value]`
Adds class `pure-u-medium-[value]`. --medium-min media query.

#### `lgSize=[value]`
Adds class `pure-u-large-[value]`. --large-min media query.

#### `xlgSize=[value]`
Adds class `pure-u-x-large-[value]`. --x-large-min media query.

All size-attributes takes a value specifying the size of the cell, using format: `n-n`, where `1-2` mean cell takes up 50% width, `3-4` takes up 75% width etc. See [pure.css documentation](http://purecss.io/grids/) for details.

## Example
```js
import { Grid, Cell } from 'deku-pure-grid';

export default {
  render: function () {
    return (<Grid>
      <Cell size='1-1' smSize='1-2' mdSize='1-3' lgSize='1-4' xlgSize='1-5'>
        Cell content
      </Cell>
    </Grid>);
  }
}
```

## Output
```html
<div class='pure-g'>
  <div class="pure-u-1-1 pure-u-small-1-2 pure-u-medium-1-3 pure-u-large-1-4 pure-u-x-large-1-5">Cell content</div>
</div>
```

## index.css

Import the css using [postcss](https://github.com/postcss/postcss). Depends on [postcss-custom-media](https://github.com/postcss/postcss-custom-media) to define breakpoints.
```css

@custom-media --x-large-min (min-width: 1600px);
@custom-media --large-min (min-width: 1348px);
@custom-media --medium-min (min-width: 1024px);
@custom-media --small-min (min-width: 768px);

@import 'deku-pure-grid';

```
