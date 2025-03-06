"use strict";

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

  const isValid = (arr) => (arr && arr.length ? arr : 0);
  const sortByLength = (a, b) => a.length - b.length;
  const findArrayFollowingMissingArray = (el, i, arr) => i === 0 ? false : el.length - 1 !== arr[i - 1].length;

  if (isValid(arrayOfArrays) && arrayOfArrays.every(isValid)) {

    const arrayFollowingMissingArray = arrayOfArrays
      .sort(sortByLength)
      .find(findArrayFollowingMissingArray);

    const lengthMissingArray = arrayFollowingMissingArray.length - 1;
    return lengthMissingArray;

  }
}

console.log(getLengthOfMissingArray([[3, 3, 3], [4, 4, 4, 4], [1]]));
console.log(getLengthOfMissingArray([[1],[3, 3, 3],[5, 5, 5, 5, 5],[2, 2],[6, 6, 6, 6, 6, 6],]));
