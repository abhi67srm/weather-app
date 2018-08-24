// var somePromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //resolve('Hey, it worked');
//         reject('Unable to fulfill promise');
//     },2500);
    
// });

// somePromise.then((message)=>{
//     console.log('Success :', message);
// },(errorMessage)=>{
//     console.log('Error: ', errorMessage);
// });

// var asyncAdd = (a,b)=>{
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              if(typeof a === 'number' && typeof b === 'number'){
//                  resolve(a+b);
//              }else{
//                  reject('Arguments must be number');
//              }
//         },1500);  
//    });
// };

// asyncAdd(8,7).then((res)=>{
//     console.log(res);

// }, (errorMessage)=>{
//     console.log("Error message");
// });

var asyncSub = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a == 'number' && typeof b === 'number'){
                resolve(a-b);
            }else{
                reject('Invalid Argument');
            }

        },2500);

    });
};

asyncSub(8,5).then((res)=>{
    console.log(res);
    return asyncSub(res, 1);

}).then((res)=>{
    console.log(res);
    return asyncSub(res, 1);

}).then((res)=>{
  console.log(res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
})