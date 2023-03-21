/// kiểm tra mảng có tăng dần không?

// let arr: Array<number> = [1, 3, 6, 7]
// let rs = ' dãy tăng dần'
// for (let i = 0; i < arr.length-1; i++) {
//     if(arr[i+1]<arr[i]){
//         rs='dãy không tăng dần'
//         break
//     }
// }
// console.log(rs)

//hảy cho biết tất cả phần tử trong mảng a có nằm trong mảng b không
let a = [1, 2, 5, 4]
let b = [1, 2, 3, 4, 5, 6]
let rs = "tât cả phần tử a nằm trong pt b"

for (let i = 0; i < a.length; i++) {
    let isInB = false;
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            isInB = true
            break
        }
    }
    if (!isInB) {
        rs = " dãy a không nằm trong dãy b"
        break
    }
}
console.log(rs)
