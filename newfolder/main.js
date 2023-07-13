let myPromise = new Promise((resolve,reject) =>{
let result = true

if(result){
    resolve('is True');
}else{
    reject('False');
}
})
myPromise.then((message)=>{
    console.log(message)
}).catch((error)=>{

})