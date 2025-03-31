export function fizzbuzzV1(number:number):string{
    function isDivisibleBy(divisor: number) {
        return number % divisor === 0;
    }
    if(isDivisibleBy(15)){
        return "fizzbuzz";
    }
    if(isDivisibleBy(3)){
        return "fizz";
    }
    if(isDivisibleBy(5)){
        return "buzz";
    }
    return number.toString();
}
export function fizzbuzzV2(number: number): string {
    if(number % 3 === 0 && number % 5 === 0){
        return "fizzbuzz";
    }
    if(number % 3 === 0){
        return "fizz";
    }
    if(number % 5 === 0){
        return "buzz";
    }
    return number.toString();
}
export function fizzbuzzV3(number: number): string {
    switch (true) {
        case number % 3 === 0 && number % 5 === 0: return "fizzbuzz";
        case number % 3 === 0: return "fizz";
        case number % 5 === 0: return "buzz";
        default: return number.toString();
    }
}