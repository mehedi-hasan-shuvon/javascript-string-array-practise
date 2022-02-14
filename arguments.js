function addNumbers(num1, num2) {
    console.log(arguments);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}

const sum = addNumbers(23, 13, 50, 100, 420);
console.log(sum);

function getFullName(firstname, lastname) {
    let fullname = "";
    for (const part of arguments) {
        fullname = fullname + part + " ";
    }

    return fullname;
}
const name = getFullName('omuk', 'sonket', 'bin', 'hanif', 'shonket');
console.log(name);