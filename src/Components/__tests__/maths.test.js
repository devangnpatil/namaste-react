import { sum, subs, multiply, divide } from "../Maths";
test("Sum function should calculate the sum of 2 numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

test("Subs function should calculate the difference of 2 numbers", () => {
  expect(subs(2, 3)).toBe(-1);
});

test("Multiply function should calculate the product of 2 numbers", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("Devide function should calculate the quotient of 2 numbers", () => {
  expect(divide(10, 5)).toBe(2);
});
