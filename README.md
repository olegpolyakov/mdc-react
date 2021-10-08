# MDC React

[Material Components Web](https://github.com/material-components/material-components-web) implemented in React.

## Setup

Install the library using npm:

```sh
npm i mdc-pug
```

If you plan on using the Sass files, you'll also need to install `sass`:

```sh
npm i -D sass
```

> **NOTE**: MDC React (as well as MDC Web) uses the new [Sass Module System](https://sass-lang.com/blog/the-module-system-is-launched). Unfortunately at this time the `node-sass` implementation does not support it. Please use the `sass` library.

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