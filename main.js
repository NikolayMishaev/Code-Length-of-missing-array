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
    const sortByLength = (a, b) => a.length - b.length
    if ( isValid(arrayOfArrays) && arrayOfArrays.every(isValid)) {
        return arrayOfArrays.sort(sortByLength)
    }
}

console.log(getLengthOfMissingArray([[2,2,3],[3,3,3,3,3,33,,],[4,4],[3]]))
// console.log(getLengthOfMissingArray([[2],[]]))