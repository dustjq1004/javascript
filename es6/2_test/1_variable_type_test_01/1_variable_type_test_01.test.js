const variableType01 = require("../../1_study/1_variable_type/1_variable_type_01");


test("자바스크립트 타입 숫자,문자열,boolean,undefined,null에 대해서 알아보자", () => {
    expect(typeof variableType01.num).toEqual("number");
    expect(typeof variableType01.intNum).toEqual("number");
    expect(typeof variableType01.floatNum).toEqual("number");
    expect(typeof variableType01.singleQuoteStr).toEqual("string");
    expect(typeof variableType01.doubleQuoteStr).toEqual("string");
    expect(typeof variableType01.singleChar).toEqual("string");
    expect(typeof variableType01.istrue).toEqual("boolean");
    expect(typeof variableType01.emptylet).toEqual("undefined");
    expect(typeof variableType01.nulllet).toEqual("object");
    
});