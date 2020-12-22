import React from "react"
import ReactDOM from "react-dom"
import Test from "./test.mdx"
import { MDXProvider as Markdown } from "@mdx-js/react"

function Yo() {
	return <h1 style={{ color: "red" }}>Yo</h1>
}

function HelloWorld() {
	return (
		<Markdown components={{ Yo }}>
			<Test />
		</Markdown>
	)
}

// prettier-ignore
ReactDOM.render(
	<HelloWorld />,
	document.getElementById("root"),
)
