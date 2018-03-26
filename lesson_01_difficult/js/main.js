var num = 33721,
    part_num = num.toString();

console.log(part_num[0]);
console.log(part_num[1]);
console.log(part_num[2]);
console.log(part_num[3]);
console.log(part_num[4]);

var total = (part_num[0]) * (part_num[1]) * (part_num[2]) * (part_num[3]) * (part_num[4]);

console.log('Итог умножения цифр числа:');
console.log(total);
console.log('Итог возведения в 3 степень:')
var degree = total ** 3;

console.log(degree);