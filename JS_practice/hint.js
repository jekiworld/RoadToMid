// sorting array[array]
const intervals = [[3, 4], [1, 2], [5, 6]];

// Сортируем по первому элементу каждого вложенного массива
intervals.sort((a, b) => a[0] - b[0]);

console.log(intervals);  // Вывод: [[1, 2], [3, 4], [5, 6]]


//sorting array
nums1.sort((a, b) => a - b);

//проверка есть ли в массиве это число
if (array.includes(nums1)) {
    return true
}

// set -> array
Array.from(set1)