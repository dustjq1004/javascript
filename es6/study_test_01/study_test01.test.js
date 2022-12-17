//import sum from "../study_01/study01";
const sum = require("../study_01/study01")


test("함수 sum을 사용하여 1 과 2를 더한 3을 구한다", () => {
    expect(sum(1, 2)).toBe(3);
})