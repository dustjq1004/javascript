const arrMock = require("../../1_study/2_array/2_array_02");
jest.mock("../../1_study/2_array/2_array_02");
const assert = require("node:assert");

test("자바스크립트의 배열은 동적으로 요소를 추가할 수가 있다.", ()=> {
    
    expect(arrMock.tempArr).toEqual([]);
    assert.deepEqual(arrMock.tempArr, []);

    arrMock.tempArr[0] = "피자";
    assert.deepEqual(arrMock.tempArr, ["피자"]);
})