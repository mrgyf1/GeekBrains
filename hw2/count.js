// Part 1
var a = 1, b = 1, c, d;
c = ++a; alert(c); //Инкрементируем A до присвоения, то есть увеличиваем значение на единицу и присваеваем это значение. Итог C = 2, A =2 (2)
d = b++; alert(d); // Инкрементируем B после присвоение, то есть сначала d=b, а потом увеличиваем b на единицу. Итог d =1, b = 2
c = (2+ ++a); alert(c); //Выполняем 2 + (инкремент А до операции сложения, то есть А = 3) = 2 + 3 = 5
d = (2+ b++); alert(d); // Выполняем 2 + (инкремент b после операции сложения, то есть в момент выполнения операции b = 2, а после выполнения b = 3) = 2 + 2 = 4
alert(a); // см. строку 5. А = 3
alert(b); // см. строку 6. B = 3

//Part 2

var a = 2;
var x = 1 + (a *= 2)
// x = 5, т.к x = 1 + (2 * 2) = 5

//Part 3
/*
 ТЗ = Напишите программу, которая выводит через console.log все числа от
 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
 а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она
 выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
 */

var count = 0;
while (count < 101){
    fizz = count%3;
    buzz = count%5;
    if (fizz == 0) {
        console.log("Fizz") //Число делится на 3 без остатка
    }
    if (buzz == 0 && fizz != 0){
        console.log("Buzz") //Число делится на 5 без остатка, но не делится на 3
    }
    if (buzz != 0 && fizz !=0){
        console.log (count);
    }
    count++;
}
