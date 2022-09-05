//****1****** */
let org_arr = [1, 2, 3, 4, 5];

org_arr.reverse();
console.log(org_arr);


// //2
// const array = [1, 2, 3, 5, 4, 2, 6, 4]
// const newarray = new Set(array)
// console.log(newarray)

// //******3*******
// function array_unique(arrayNumber){
//     arrayNumber.sort();

//     let max =[0,0];

    
//     let count =1;
//     for (let i = arrayNumber.length-1; i > 0; --i) {
//         if (arrayNumber[i] == arrayNumber[i-1]) ++count;
//         else{
             
//              if (max[1] < count){ 
                  
//                   max[0] = arrayNumber[i];
//                   max[1] = count;   
//              }
//              count = 1;
//         }
//     }
//     console.log( "Số" + max[0] + " xuất hiện nhiều nhất với " + max[1] + " lần");
// }
// let arrayNumber = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
// console.log(array_unique(arrayNumber))