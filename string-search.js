const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    '1X59 Lenovo vommercial yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];

const seraching = 'laptop';

//indexOf
const output = [];

// for (const product of products) {
//     if (product.toLowerCase().indexOf(seraching) != -1) {
//         output.push(product);
//     }
// }
// console.log(output);

//includes
const output2 = [];

for (const product of products) {
    if (product.toLowerCase().includes(seraching) == true) {
        output2.push(product);
    }
}
console.log(output2);

// strats with 
let search = 'dell'
for (const product of products) {
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);