# react-html-comment

> Component for writing comments in the HTML

[![NPM](https://img.shields.io/npm/v/react-html-comment.svg)](https://www.npmjs.com/package/react-html-comment)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-html-comment

yarn add react-html-comment
```

## Usage

```jsx
import React from 'react';

import HTMLComment from 'react-html-comment';

class Example extends React.Component {
  render() {
    return <HTMLComment text="this is a html comment" />;
  }
}
```

Output in source:

```
...
<!--this is a html comment-->
...
```

## License

MIT © [Zneider](https://github.com/Zneider)
