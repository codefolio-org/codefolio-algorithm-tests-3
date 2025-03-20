const weightedAverage = require("./weighted_average");

test("重み付き平均の計算", () => {
  expect(weightedAverage([2, 4, 6], [1, 2, 3])).toBe(5);
});

test("重み付き平均の計算（異なるデータ）", () => {
  expect(weightedAverage([10, 20, 30], [3, 2, 1])).toBe(17);
});
