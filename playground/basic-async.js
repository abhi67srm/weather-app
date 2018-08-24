console.log("Starting App");

setTimeout(()=>{
   console.log("Inside Asynchronous function");
}, 2000);

setTimeout(()=>{
    console.log("Another setTimeout function");

},0);

console.log("Finishing App");