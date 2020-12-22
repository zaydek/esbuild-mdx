const { build } = require("esbuild")
const fs = require("fs")
const mdx = require("@mdx-js/mdx")

const missingImportStatements = `
import React from "react"
import { mdx } from "@mdx-js/react"
`.trim()

// Based on https://github.com/mdx-js/mdx/blob/main/packages/loader/index.js.
const mdxPlugin = {
	name: "mdx",
	setup(build) {
		build.onLoad({ filter: /\.mdx$/ }, async args => {
			const text = await fs.promises.readFile(args.path, "utf8")

			let jsx = ""
			jsx = await mdx(text)
			jsx = missingImportStatements + "\n\n" + jsx
			return {
				contents: jsx,
				loader: "jsx",
			}
		})
	},
}

;(() => {
	build({
		bundle: true,
		define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
		entryPoints: ["index.tsx"],
		outfile: "out.js",
		plugins: [mdxPlugin],
	}).catch(() => process.exit(1))
})()
