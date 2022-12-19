const array01 = require("../../1_study/2_array/2_array_01");

test("배열에 대해서 알아보자", () =>{
    array01.numArr.forEach((value, index)=> {
        expect(value).toBe(index + 1);
        console.log(`numArr[${index}] : ${value}`);
    });
    array01.constructorArr.forEach((value, index)=> {
        console.log(`consructorArr[${index}] : ${value}`);
        expect(typeof value).toEqual(index < 4 ? "number" : "string");
    });
});