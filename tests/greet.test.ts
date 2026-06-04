import { test } from "node:test";
import assert from "node:assert/strict";

import { greet } from "../index.js";

test("greets with the default greeting", () => {
	assert.equal(greet("world"), "Hello, world!");
});

test("honors a custom greeting", () => {
	assert.equal(greet("world", { greeting: "Hi" }), "Hi, world!");
});
