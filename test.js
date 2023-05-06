const arr = [1, 2, 9, 3, 6, 8];
// arr.pop();
arr.push(10);

console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr[99] = 0;
// for (let value of arr){
//     console.log(value);
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// })

const str = "asd, asdd, dsfsd, dsfsd, sdfdsf, dsgrtg";
const products = str.split(", ");
console.log(products);
arr.sort(compareNum);
console.log(arr.join('; '));

function compareNum(a, b){
    return a-b;
}


///////////////////////////////////////////////////////////////////////////////////
// const option = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function (){
//         console.log('Test')
//     }
// };
//
// // console.log(option.color.bg)
//
// for (let key in option){
//     if (typeof(option[key]) === 'object'){
//         for (let i in option[key]){
//             console.log(`   ${key} : ${i} имеет значение ${option[key][i]}`);
//         }
//     } else {
//         console.log(`Свойства ${key}, имеет значение ${option[key]}`);
//     }
// }
//
// console.log(Object.values(option));
// option.makeTest();
//
// const {border, bg} = option.color;
// console.log(border);

/////////////////////////////////////////////////////////////////////////

// function first(){
//     setTimeout(function (){
//         console.log(1)
//     }, 500);
// }
//
// function second(){
//     console.log(2);
// }
//
// first();
// second();
//
// function learnJS(lang, callback){
//     console.log(`Я учу ${lang}`);
//     callback();
// }
//
// function done(){
//     console.log('Я прошел этот урок')
// }
//
// // learnJS('Javascript', function (){
// //     console.log('Я прошел этот урок')
// // })
//
// learnJS('Javascript', done);



