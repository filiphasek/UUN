function BinaryConvertor(number) {
    if (!Number.isInteger(number)) {
        return "Please enter a valid number";
    }
    if (number === 0) {
        return 0;
    }
    let binary = "";
    while (number > 0) {
        let remainder = number % 2;
        binary = remainder + binary;
        number = Math.floor(number / 2);
    }
    return binary;
}
console.log(BinaryConvertor(13));
console.log(BinaryConvertor(0));
console.log(BinaryConvertor(6721));