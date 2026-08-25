// console.log("hello world")
// const sum = function(a,b){
//     return(Math.sqrt(a)+Math.sqrt(b));
// }
// console.log(sum(4,16));

// const sum=(a,b)=>{
//     return(a+b);
// }
// console.log(sum(4,16));//20

// IIFE (Immediately Invoked Function Expression)
// (()=>{
//     console.log("using IIFE");
// })();
//the IIFE is a function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts.
//  The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
//  The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.





// var a = 5;
// if(a<10){
//     var a=20;
//     console.log(`value of a inside if block: ${a}`); //20
// }
// console.log(`value of a outside if block: ${a}`); //20


// function sum(a,b){
//     return a+b;
// }
// function mesageWithSum(a,b){
//     const result=sum(a,b);
//     console.log(`the sum of ${a} and ${b} is ${result}`);
//     //another way
//     // console.log("the sum of "+a+" and "+b+" is "+result);
// }
// messageWithSum(5,6);





function login(error,msg){
    if(error){
        console.log(`error: ${error}`);
    }else{
        console.log(`message: ${msg}`);
    }
}
 function loginHandler(username,password,callback){
    if(username=="shagun" && password=="12345"){
        callback(null,"login successful");
    }else{
        callback("invalid username or password",null);
    }
 }

 loginHandler("shagun", "12345", login);
 loginHandler("shagun", "1234", login);

<<<<<<< HEAD
//Async programming
console.log("One")
setTimeout(()=>{console.log("Two")},1000)
console.log("Three")
// output: One, Three, Two

// Synchronous programming
console.log("One")
for(i=0;i<1000;i++){
    console.log("i="+i);
}
console.log("three");
// output: One, i=0, i=1, i=2, ..., i=999, three

// const container=document.getElementById('container');
// const button=document.getElementById('btn');

// const h1=document.createElement('h1');
// console.log(h1);
// h1.innerText="Hello User!";
// function ping(){
//     //alert('server ping')
//     container.innerHTML='<h2>Welcome to DOM</h2>';
//     container.appendChild(h1);
// }

// button.addEventListener('click',ping); 
=======
console.log("One")
setTimeout(()=>{console.log("Two")},1000)
console.log("Three")
>>>>>>> f0de386aeb59531926764aca6d6c3872885b39d1
