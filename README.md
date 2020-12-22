# esbuild-mdx

This is a minimal repo that aims to demonstrate how to esbuild + React + MDX.

**Why esbuild?** esbuild is a next generation JavaScript bundler. Combined with TypeScript, esbuild makes Babel and webpack obsolete. Furthermore, esbuild is fast. Really fast.

**Why MDX?** MDX does more than parse markdown as HTML; MDX creates an intermediary representation of HTML and can interpolate React components.

## How to use this repo

1. Run `yarn` (or your favorite package manager) to initialize dependencies
1. Run `yarn watch` to bundle `out.js`
1. Open `index.html` to see `test.mdx` prerendered as HTML
