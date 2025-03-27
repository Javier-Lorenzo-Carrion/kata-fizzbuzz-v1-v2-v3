import {fizzbuzzV2} from "../core/fizzBuzzV2";

describe('FizzBuzz should', () => {
    it("returns number one as a string for number one", () => {
        expect(fizzbuzzV2(1)).toBe("1");
    });
    it("returns number two as a string for number two", () => {
        expect(fizzbuzzV2(2)).toBe("2");
    })
    it("returns fizz for number three", () => {
        expect(fizzbuzzV2(3)).toBe("fizz");
    })
    it("returns buzz for number five", () => {
        expect(fizzbuzzV2(5)).toBe("buzz");
    });
    it("returns fizzbuzz for number fifteen", () => {
        expect(fizzbuzzV2(15)).toBe("fizzbuzz");
    });
    it("returns number as a string for any number that is not divisible by three or five", () => {
        expect(fizzbuzzV2(17)).toBe("17");
    });
    it("returns fizzbuzz for other number divisible by 3 and 5", () => {
        expect(fizzbuzzV2(30)).toBe("fizzbuzz");
    });
})