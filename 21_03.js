//4. Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm chữ số xuất hiện ít nhất trong mảng


let arr = [1, 2, 3, 4, 1, 2, 3, 1, 3, 4, 4 , 4]
let map = new Map
let leastFound = -1;

if (arr.length === 0) {
    leastFound = 'Mảng Không Giá Trị';
} else {
    for (let indexing = 0; indexing < arr.length; indexing++) {
        if (map.get(arr[indexing]) === undefined) {
            map.set(arr[indexing], 1);
            leastFound = arr[indexing];
        } else {
            map.set(arr[indexing], map.get(arr[indexing]) + 1);
            if (map.get(leastFound) > map.get(arr[indexing])) {
                leastFound = arr[indexing];
            } else {

            }
        }
    }
}

console.log(leastFound)


// for (let number of arr) {
//     map.set(number, map.get(number) + 1 || 1)
// }
// console.log(map)


/*map.forEach((key, value) => {
    console.log(map.get(value))
})*/
//7."- Cho mảng số thực có nhiều hơn 2 giá trị và các giá trị trong mảng khác nhau từng đôi một.
// Hãy viết hàm liệt kê tất cả các cặp giá trị (a, b) trong mảng thỏa điều kiện a <= b"
// let temp = [1, 2, 3, 4, 6, 5, 7, 8]
// for (let i = 0; i < temp.length;i= i+2) {
//     if (temp[i] <= temp[i + 1]) {
//         console.log(`Cặp ${temp[i]} và ${temp[i + 1]}`)
//     }
// }