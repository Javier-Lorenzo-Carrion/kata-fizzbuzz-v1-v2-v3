import {fizzbuzzV3} from "../core/fizzbuzzV3";

describe("FizzBuzzV3 should", ()=>{
    it("returns number one as a string for number one", ()=>{
        expect(fizzbuzzV3(1)).toBe("1");
    })
})