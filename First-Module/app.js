function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && input2 === 'number') {
        result = input1 + input2;
        console.log(result);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultType === "as number") {
        return +result;
    }
    return result.toString();
}
// const combinedStrings = combine("Hola", "Mundo", "as string");
// const combinedAges = combine(23, 2, "as string");
// const combinedStringAges = combine("23", "23", "as number");
var combinedAgesString = combine(1, 1, "as string");
// console.log(combinedStrings);
// console.log(combinedAges);
// console.log(combinedStringAges);
console.log(combinedAgesString);
