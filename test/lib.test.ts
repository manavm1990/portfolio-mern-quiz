import { expect, it } from "vitest";
import { add2Numbers } from "../src/lib.js";

it("adds 2 numbers", () => {
  expect(add2Numbers(2, 3)).toBe(5);
});
