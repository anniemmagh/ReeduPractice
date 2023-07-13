// // let myPromise = new Promise((resolve,reject) =>{
// // let result = true

// // if(result){
// //     resolve('is True');
// // }else{
// //     reject('False');
// // }
// // })
// // myPromise.then((message)=>{
// //     console.log(message)
// // }).catch((error)=>{

// // });

// // let obj = {
// //     name:'Ani',
// //     age:21,
// //     address:'Kutaisi',
// //     isMarried:{
// //         status:true,
// //         name:"Marta"
// //     },
// // }
// // let {...rest} = obj;
// // console.log(rest)

// let array = [[1,2,3],[4,5,6]];
// for(let i in array){
//     console.log(i)
// }
// // for(let i=0; i<array.length;i++){
// //     let arrayTwo =array[i];
// //     for(let j=0;j<arrayTwo.length;j++){
// //         console.log(arrayTwo[j])
// //     }
// // }




// // let obj ={
// //     names:'ANi',
// //     age:21,
// //     address:'Kutaisi',
// //     isMarried:{
// //         status:false,
// //     },
// // }
// // console.log(obj.isMarried.status)

async function data() { 
    try{
await fetch('https://jsonplaceholder.typicode.com/users')
.then(Response => Response.json())
.then((result)=>{
    result.forEach(users => {
        const container = document.querySelector('.container');
        const li = document.createElement('li')
        li.innerHTML =users.name;
        container.appendChild(li);
    });
})

    }catch(error){
        alert(error)
    }
 }
 data();