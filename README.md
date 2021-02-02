# esbuild-mdx

`esbuild-mdx` resolves `.md` and `.mdx`-delimited files as markdown components you can render in your React components.

1. Add `esbuild-mdx` and `@mdx-js/react` as developer dependencies:

```sh
yarn add --dev @mdx-js/react esbuild-mdx
```

2. Add `react` and `react-dom` as dependencies:

```sh
yarn add react react-dom
```

3. Create [`esbuild.js`](https://github.com/zaydek/esbuild-mdx-example/blob/master/esbuild.js):

```js
require("esbuild").build({
	// ...
	plugins: [require("esbuild-mdx")()],
	// ...
})
```

4. Create a `.md` or `.mdx`-delimited file:

```md
# Hello, world rendered by `esbuild-mdx`!
```

5. Import your `.md` or `.mdx` file and render as a React component:

```jsx
import React from "react"
import ReactDOM from "react-dom"

import MarkdownComponent from "./example.md"

function App() {
	return (
		<div>
			<h1>
				Hello, world rendered by <code>React</code>!
			</h1>
			<MarkdownComponent />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
```

See [esbuild-mdx-example](https://github.com/zaydek/esbuild-mdx-example) for a reference implementation.

**Note:** `react`, `react-dom`, and `@mdx-js/react` are peer dependencies.

## License

Licensed as MIT open source.
