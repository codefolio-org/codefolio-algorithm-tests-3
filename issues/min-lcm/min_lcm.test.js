const findLCM = require("./min_lcm");

test("最小公倍数(12, 15)", () => {
  expect(findLCM(12, 15)).toBe(60);
});

test("最小公倍数(5, 3)", () => {
  expect(findLCM(5, 3)).toBe(15);
});

test("最小公倍数(7, 11)", () => {
  expect(findLCM(7, 11)).toBe(77);
});
