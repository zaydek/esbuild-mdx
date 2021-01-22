const fs = require("fs")
const mdx = require("@mdx-js/mdx")

// https://github.com/mdx-js/mdx/blob/e7e9d464c7d1eec83bc7b86689ba9428a0e023bd/packages/loader/index.js
const missingImportStatements = `
import React from "react"
import { mdx } from "@mdx-js/react"
`.trim()

// This plugin uses build.onLoad to intercept .md and .mdx-delimited filenames.
// These files are then read from disk and parsed by @mdx-js/mdx. Finally,
// import statements are manually added.
//
// This implementation is roughly based on the @mdx-js/mdx: https://github.com/mdx-js/mdx/blob/main/packages/loader/index.js.
module.exports = {
	name: "esbuild-mdx",
	setup(build) {
		build.onLoad({ filter: /\.mdx?$/ }, async args => {
			const text = await fs.promises.readFile(args.path, "utf8")

			let contents = await mdx(text)
			contents = missingImportStatements + "\n\n" + contents
			return {
				contents,
				loader: "jsx",
			}
		})
	},
}
