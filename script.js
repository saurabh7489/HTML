// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let list = document.getElementById('list');
// btn.addEventListener("click",()=>{
//     let city=input.value;
//     let apiK='9f6290d6cda9a36a63755fadee71f83d'
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiK}`).then((data)=>{
//         return data.json()

//     }).then((info)=>{
//         console.log(info);
//        let time= new Date().toLocaleTimeString()
//        console.log(time);
       
        

//     })
// })


// btn.addEventListener("click",()=>{
//     let data=input.value
    
//     fetch(`https://api.tvmaze.com/search/shows?q=${data}`).
//     then((info)=>{
//         return info.json()

//     }).then((val)=>{
//        console.log(val);
       
//             show(val)
//     })

// })


// function show(val){
//   for(let i of val){
//     let img=  document.createElement("img")
//     console.log(i.show.image.original,"heheh");
//     img.setAttribute("src",i.show.image.original)   
//     list.append(img)

//   }
// //   img.setAttribute("src",val[0].show.image.
// //     original)

//     // list.appendChild(img)

// }





// function fetchData(searchText) {
//   axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//   .then(function(response) {
//     manipulateDOM(response.data);
// })
// }

// function manipulateDOM(data) {
//   while(list.firstChild) {
//     list.firstChild.remove();
//   }

//   for (let d of data) {
//     if (d.show.image) {
//       let img = document.createElement('img');
//       img.setAttribute('src', d.show.image.original);
//       list.appendChild(img);
//     }  
//   }
// }

// btn.addEventListener('click', function() {
//   let searchText = input.value;
//   let data = fetchData(searchText);
// })





// let city="bhopal"

// let change=document.querySelector("H2");
// change.innerText=change.innerText + " from appnyDuniya!"
// console.dir(change.innerText);
// let acces=document.querySelectorAll(".box");
// acces[0].innerText="jai ho";
// acces[1].innerText="jai ho";
// acces[2].innerText="jai ho";


let btn=document.createElement("button");
btn.innerHTML="click me";
btn.style.backgroundColor="red";
btn.style.color="white";
document.querySelector("body").prepend(btn);