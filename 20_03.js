let arr = [1, 2, 3, 4, 2, 2, 1];

let countMap = new Map();
for (let number of arr) {
    countMap.set(number, countMap.get(number) + 1||1)
}
console.log(countMap);
//
// let arr1 = [1, 2, 3, 4, 2, 2, 1];
// let map = new Map()
// for (let i = 0; i < arr1.length; i++) {
//     if(map.get(arr1[i])===undefined){
//         map.set(arr1[i],1)
//     } else {
//         map.set(arr1[i],map.get(arr1[i])+1)
//     }
// }
// for (let item of map){
//     console.log(item[0]+ " xuất hiện " + item[1]+" lần")
// }
//cho mảng a in ra những phần tử chỉ xuất hiện 1 lần
//cho mảng a tạo ra mảng b chứa các phần tủ của mảng nhưng không lặp
