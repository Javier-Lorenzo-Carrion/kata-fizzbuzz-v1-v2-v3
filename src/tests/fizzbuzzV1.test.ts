import {fizzbuzzV1} from "../core/fizzBuzzV1";


describe('FizzBuzz should', () => {
    it("returns number one as a string for number 1", () => {
        expect(fizzbuzzV1(1)).toBe("1");
    });
    it("returns number two as a string for number 2", () => {
        expect(fizzbuzzV1(2)).toBe("2");
    });
    it("returns fizz for any number divisible by 3", () => {
        expect(fizzbuzzV1(3)).toBe("fizz");
    });
    it("returns buzz for any number divisible by 5", () => {
        expect(fizzbuzzV1(5)).toBe("buzz");
    });
    it("returns fizzbuzz for any number divisible by 3 and 5", () => {
        expect(fizzbuzzV1(15)).toBe("fizzbuzz");
    });
})