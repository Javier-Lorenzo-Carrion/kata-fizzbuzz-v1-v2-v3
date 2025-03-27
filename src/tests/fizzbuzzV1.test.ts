import {fizzbuzzV1} from "../core/fizzBuzzV1";


describe('FizzBuzz should', () => {
    it("returns number one as a string for number one", () => {
        expect(fizzbuzzV1(1)).toBe("1");
    });
    it("returns number two as a string for number two", () => {
        expect(fizzbuzzV1(2)).toBe("2");
    });
    it("returns fizz for number three", () => {
        expect(fizzbuzzV1(3)).toBe("fizz");
    });
    it("returns buzz for number five", () => {
        expect(fizzbuzzV1(5)).toBe("buzz");
    });
    it("returns fizzbuzz for number fifteen", () => {
        expect(fizzbuzzV1(15)).toBe("fizzbuzz");
    });
    it("returns fizz for any number divisible by three", () => {
        expect(fizzbuzzV1(6)).toBe("fizz");
    });
    it("returns buzz for any number divisible by five", () => {
        expect(fizzbuzzV1(10)).toBe("buzz");
    });
    it("returns fizzbuzz for any number divisible by fifteen", () => {
        expect(fizzbuzzV1(30)).toBe("fizzbuzz");
    });
    it("returns number as a string for any number that is not divisible by three or five", () => {
        expect(fizzbuzzV1(17)).toBe("17");
    });
})