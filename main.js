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
    const findArrayFollowingMissingArray = (el, i, arr) => i === 0 ? false : el.length - 1 !== arr[i - 1].length 

    if ( isValid(arrayOfArrays) && arrayOfArrays.every(isValid)) {
        return arrayOfArrays
        .sort(sortByLength)
        .find(findArrayFollowingMissingArray)
    }
}

console.log(getLengthOfMissingArray([[2,2,3],[3,3,3,3,3,33],[4,4],[3]]))
console.log(getLengthOfMissingArray([[1],[1,2,3],[1,2,3,4,5],[1,2],[1,2,3,4,5,6]]))