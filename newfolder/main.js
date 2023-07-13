// let myPromise = new Promise((resolve,reject) =>{
// let result = true

// if(result){
//     resolve('is True');
// }else{
//     reject('False');
// }
// })
// myPromise.then((message)=>{
//     console.log(message)
// }).catch((error)=>{

// });

// let obj = {
//     name:'Ani',
//     age:21,
//     address:'Kutaisi',
//     isMarried:{
//         status:true,
//         name:"Marta"
//     },
// }
// let {...rest} = obj;
// console.log(rest)

let array = [[1,2,3],[4,5,6]];
for(let i=0; i<array.length;i++){
    let arrayTwo =array[i];
    for(let j=0;j<arrayTwo.length;j++){
        console.log(arrayTwo[j])
    }
}