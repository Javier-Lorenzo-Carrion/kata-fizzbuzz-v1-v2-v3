import {fizzbuzzV3} from "../core/fizzbuzzV3";

describe("FizzBuzzV3 should", ()=>{
    it("returns number one as a string for number one", ()=>{
        expect(fizzbuzzV3(1)).toBe("1");
    })
    it("returns number two as a string for number two", ()=>{
        expect(fizzbuzzV3(2)).toBe("2");
    })
    it("returns fizz for number three", ()=>{
        expect(fizzbuzzV3(3)).toBe("fizz");
    })
})