'use strict'

/* 

данные на входе: массив массивов
данные на выходе: число

псевдокод:
проверить, что на входе массив со значениями
проверить, что каждый элемент массива имеет массив со значениями
отсортировать элементы массива по их длине
сравнить длину соседних массивов, и если длина отличается больше чем на один, вернуть этот массив
отнять от длины найденного массива 1 и вернуть значение

bugfix:

*/

function getLengthOfMissingArray(arrayOfArrays) {
    const isValid = (arr) => arr && arr.length ? arr : 0;
    return arrayOfArrays.every(isValid)
}

console.log(getLengthOfMissingArray([[2],[4]]))
console.log(getLengthOfMissingArray([[2],[]]))