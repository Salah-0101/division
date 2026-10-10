
import { divide } from "../src/calculator.js";

test("Divides two numbers correctly", () => {
  expect(divide(10, 2)).toBe(5);
});

test("First argument is not a number", () => {
  expect(() => divide("10", 2)).toThrow(TypeError);
});

test("Second argument is not a number", () => {
  expect(() => divide(10, "2")).toThrow(TypeError);
});

test("Argument is NaN", () => {
  expect(() => divide(NaN, 2)).toThrow(TypeError);
});

test("Division by zero", () => {
  expect(() => divide(10, 0)).toThrow(RangeError);
});
