import { sum } from "../sum"

test("Sum function should calculate the sum of two numbers",()=>{
    const result = sum(3,4);
    expect(result).toBe(7);
})
test("Sum",()=>{
    const ans = sum(10,10);
    //Assertion
    expect(ans).toBe(20);
})