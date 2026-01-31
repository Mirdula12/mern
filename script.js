/*  console.log("Mirdula");

console.log(a);
var a=6

console.log(a);
let a=6;

let a=6;
let b=a;
a=4;
console.log(b);

let object1={age:33};
let object2=object1;
object1.age=22;
console.log(object2.age);

let a=true;
let b=false;
if(a||b){
    console.log("executed");
} 

console.log(9>>2);
console.log(9<<2); 
console.log(9&5);
console.log(9|5);
console.log(9^5);

function sum(a,b){
    return a+b;
}
console.log(sum(11,22)); 

function sum(a,b){
    console.log(a+b);
}
sum(11,22);

function sum(a,b){
    console.log(a+b);
}
const sum2=(a,b,c)=>{
    console.log(a+b+c);
}
sum2(11,22,33); */

/*function double(num){             // function triple(num){
    return num*2;                 // return num*3;
}                                   //}
let arr=[2,3,4,5,6,7];
let doubledArr=arr.map(double);      // map = apply a function to each element of the array and return a new array
console.log(doubledArr);
const tripleArr = arr.map((n) => n * 3);       //let tripleArr=arr.map(triple);
console.log(tripleArr);

function isOdd(num){
    return num % 2 !== 0;
}
let oddNumbers = [2,3,4,5,6,7].filter(isOdd);           //let oddNumbers = [2,3,4,5,6,7].filter(num => num % 2 !== 0);                         // filter = check the condition and return the array with elements that satisfy the condition
console.log(oddNumbers);

let array=[13,15,20,35,27]
let five =array.filter(num => num%5 ==0);
console.log(five);
 
let array1=[1,2,3,4,5,6];
let sum = array1.reduce((product,current)=>{
    return product*current;
},1);
console.log(sum);  */    // reduce = reduce the array to a single value by applying a function to each element of the array
 
/* function triple(num){
    return num*3;
}
let arr = [1,2,3,4,5,6];
let tripleArr=arr.map(triple);
console.log(tripleArr);
let even = tripleArr.filter( arr=> arr%2==0);
console.log(even);
let sumofEven =even.reduce((sum,current)=>{
    return sum+current;
},0);
console.log(sumofEven); */

// destructure
/*let b=[1,2,3,4,5];
const[one,two] = b;              //const[one,,two]=b;    //3
console.log(two); */

//rest operator(...)
 /*let b=[1,2,3,4,5];
const[one,...two] = b;              //const[one,two,...three]=b;    
console.log(two);                    // console.log(three)        //[3,4,5]

//spread (...)
let num=[0,...b,6,7]
console.log(num); 

const obj1={x:3,y:5}
const obj2={y:6,z:7}
const spread={...obj1,...obj2}
console.log(spread)*/

/*const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const success=true;
    if(success){
    resolve("Resolved successfully")
    } else{
        PromiseRejectionEvent("rejeced")
    }  
},1000)
})
console.log("Before promise execution");
promise.then((result)=>console.log(result))
        .catch(err=>console.log(err))
        .finally(()=>console.log("Process completed"))

        console.log("After Promise execution");  

let object3={name:"virat",age:38,country:"India"};
console.log(object3.country)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {return response.json()})
      .then((data) => {data.map(user => console.log(user.name))})
      .catch((err)=>console.log(err));

 async function fetchApi(){   
    try{
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1'
    )
        const data = await response.json();
    }  catch(error){
        console.log(error);
    }
 }
//fetchApi();*/

/*//String literals
let name='mirdula'
let age=19
console.log(`I am ${name} and my age is ${age}`);*/

/*const mul = (a,b)=>{
    return a*b;
}
const square =(n)=>{
    return mul(n,n);
}
const print=(n)=>{
    let s= square(n);
    console.log(s);
}
print(4);*/

/*console.log('First');                                     // micro task  (javascript functiom execute directly and go to output)
Promise.resolve().then(console.log ('from promises'))     // micro task
setTimeout(()=>{                                         // macro task    ( take time to execute)
    console.log('inside Timeout');
},2000)
console.log('last');*/


const fetchApi1 = async () => {
    try {
        const res = await fetch ('http://localhost:4000/tasks/getTask');
        const data = await res.json();
        {data.map((n)=>{console.log(n)})}
    } catch (error) {
        console.log(error);
    }
}
fetchApi1();