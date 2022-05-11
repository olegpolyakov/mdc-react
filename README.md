# MDC React

[Material Components Web](https://github.com/material-components/material-components-web) implemented in React.

## Setup

Install the library using npm:

```sh
npm i mdc-react
```

If you plan on using the Sass files, you'll also need to install `sass`:

```sh
npm i -D sass
```

> **NOTE**: MDC React (as well as MDC Web) uses the new [Sass Module System](https://sass-lang.com/blog/the-module-system-is-launched). Unfortunately at this time the `node-sass` implementation does not support it. Please use the `sass` library.

### Icons

To use [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) include them in your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```

### Symbols (NEW)

To use [Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) include them in your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
```

The above snippet includes the default configuration for each <a href="https://fonts.google.com/knowledge/glossary/axis_in_variable_fonts" target="_blank" class="external">axis</a>, with <a href="https://fonts.google.com/knowledge/glossary/weight_axis" target="_blank" class="external">weight</a> at 400, <a href="https://fonts.google.com/knowledge/glossary/optical_size_axis" target="_blank" class="external">optical size</a> at 48, <a href="https://fonts.google.com/knowledge/glossary/grade_axis" target="_blank" class="external">grade</a> at 0 and <a href="https://fonts.google.com/knowledge/glossary/fill_axis" target="_blank" class="external">fill</a> (also 0.)

> To configure the symbols follow the [developer guide](https://developers.google.com/fonts/docs/material_symbols).

## Usage

### JS

To use the components just import what you need from the library:

```jsx
import { Button } from 'mdc-react';

const App = () => {
    return (
        <div>
            <Button>Click me!</Button>
        </div>
    );
};
```

Alternatively you can import only the components you need:

```jsx
import Button from 'mdc-react/button';
import Typography from 'mdc-react/typography';

const App = () => {
    return (
        <div>
            <Typography>Hello world!</Typography>
            <Button>Click me!</Button>
        </div>
    );
};
```

### Sass

You can use all the styles:

```scss
@use 'path-to-node_modules/mdc-react';
```

or only the ones you need:

```scss
@use 'path-to-node_modules/mdc-react/src/button';
@use 'path-to-node_modules/mdc-react/src/typography';
```