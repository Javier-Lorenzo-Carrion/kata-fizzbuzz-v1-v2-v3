export function fizzbuzzV3(number: number): string {
    switch (true) {
        case number % 3 === 0 && number % 5 === 0: return "fizzbuzz";
        case number % 3 === 0: return "fizz";
        case number % 5 === 0: return "buzz";
        default: return number.toString();
    }
}