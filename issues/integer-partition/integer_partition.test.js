const integerPartition = require("./integer_partition");

test("整数 4 の分割数", () => {
  expect(integerPartition(4)).toBe(5); // 4 = 4, 3+1, 2+2, 2+1+1, 1+1+1+1
});

test("整数 5 の分割数", () => {
  expect(integerPartition(5)).toBe(7); // 5 = 5, 4+1, 3+2, 3+1+1, 2+2+1, 2+1+1+1, 1+1+1+1+1
});
