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

let studentGrade=prompt("Enter The Student Grade");

if(studentGrade<=100&&studentGrade>=90){
    console.log("Grade A")
}
else if(studentGrade<=89&&studentGrade>=70){
    console.log("Grade B")
}
else if(studentGrade<=69&&studentGrade>=60){
    console.log("Grade C")
}
else if(studentGrade<=59&&studentGrade>=50){
    console.log("Grade D")
}
else{
    console.log("Student Is fail");
}