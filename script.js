// console.log("hello");
// console.log(5+5);
// console.log(5+"5");
// console.log("*",5==="5");
// console.log(5==5);
// console.log(5!=5);
// console.log(typeof(typeof(5)));
// console.log(typeof({}));

// if(undefined){
//     console.log(true)
// }
// else{
//     console.log(false);
// }

// let score = 100 
// let to=score==100
// console.log(to);

// let studentGrade=prompt("Enter The Student Grade");

// if(studentGrade<=100&&studentGrade>=90){
//     console.log("Grade A")
// }
// else if(studentGrade<=89&&studentGrade>=70){
//     console.log("Grade B")
// }
// else if(studentGrade<=69&&studentGrade>=60){
//     console.log("Grade C")
// }
// else if(studentGrade<=59&&studentGrade>=50){
//     console.log("Grade D")
// }
// else{
//     console.log("Student Is fail");
// }

// let arr=[1,2,3,4,true,"five"];
// console.log(arr);
// for(let i in arr){
// console.log(arr[i]);
// }

// let student={
// name:"ayush",
// grade:"B",
// civicSence:0,
// }
// console.log(student.name);

// console.log({}=={});
// function sum(){

//     let a=prompt("enter the value a");
//     let b=prompt("enter the value b");
//     let finalSum=a+b;
//     console.log(finalSum,typeof(a));
// }
// sum();

// let a=5;
// function sum(){
//     let b=10;
//     console.log(b);
// }
// sum();
// console.log(a);

// console.log("jai ho");
// let changeColor=document.getElementById("h1").style.color="red";
// console.log(changeColor
// console.log(a);
// var a=5;
// let bodyColor=document.querySelectorAll("body").style.color="green";
// console.log(bodyColor);
// console.log(b);
// let b=7;


// let arr=[1,2,3,4,5,5];
// console.log(arr.length);//length 

// arr.push(6);
// console.log(arr,'push');

// arr.pop();
// console.log(arr,'pop');

// arr.unshift(0);
// console.log(arr,'unshift');

// arr.shift()
// console.log(arr,'shift');

// console.log(arr.includes(6),'include');
// console.log(arr.indexOf(2),"indexof");

// let data=arr.find((a)=>{
//     return a==5;
// });

// arr.forEach((a,b,c)=>{

// console.log(a,"a");


// })
// let arr1=arr.map((a,b,c,d)=>{
//     return a;
// })
// console.log(arr1,"map");

// let arr2=arr.filter((a)=>{
//     return a>2;
// })
// console.log(arr2,"fillter");

// let sum=arr.reduce((a,b,c,d)=>{
//     console.log(a,"a");
//     console.log(b,"B")
    
//     return a+b;

    
// })
// console.log(sum);

// arra=[1,2,3,5,53,6,3,6,345,2]

// let redu=arra.filter((a)=>{
//     return a>2;
    
    
// })
// console.log(redu);


// document.querySelector("*").style.backgroundColor="red";
// // console.log(sum);
// // document.querySelector("*").style.backgroundColor="red";
// document.querySelector("h1").style.color="brown";
// document.querySelector("h1").style.textAlign="center";

// let b=30;
// {
//     var a=5;
//     let b=10;
//     const c=40;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// function sum(){
//     let a=5
// }
// console.log(a);
// sum()



// 'use strict'
// function sum(){
//     console.log(this);
// }
// sum();

var id =10;
let student ={
    id:1,
    name:"kathiRole",
    isPass:true,
    sum:function(){
        console.log(this.id);
    }
}
console.log(student.name)
student.sum();



