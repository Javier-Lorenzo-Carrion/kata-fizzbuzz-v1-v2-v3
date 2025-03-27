export function fizzbuzzV3(number: number): string {
    switch (true) {
        case number % 3 === 0: return "fizz";
        default: return number.toString();
    }
}