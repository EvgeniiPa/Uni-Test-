//test(description, work)

import { calculateTotal } from "../calculate.js";

test("basic test", () => {
  let result = 4;
  expect(result).toBe(4);
});

test("calculateTotal sum without Discount", () => {
  const list = [
    {
      id: 456,
      name: "War and Piace",
      count: 3,
      price: 400,
    },
    {
      id: 422,
      name: "JavaSkript",
      count: 1,
      price: 1400,
    },
  ];

  const result = calculateTotal(list);
  expect(result).toBe(2600);
});

test("calculateTotal sum with Discount", () => {
  const list = [
    {
      id: 456,
      name: "War and Piace",
      count: 3,
      price: 400,
    },
    {
      id: 422,
      name: "JavaSkript",
      count: 1,
      price: 1400,
    },
  ];

  const result = calculateTotal(list, true);
  expect(result).toBe(1300);
});
