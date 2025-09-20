//how to select any element
//by tag name
 let para = document.getElementsByTagName('h1')
//  console.log(para);
//  para[0].innerText = "hello world"
//  para[0].style.backgroundColor = "yellow"
//  para[0].style.border = "2px solid red"

 for(let element of para){
    element.innerHTML= "welcome to javascript"
    element.style.fontSize = "20px"
    element.style.color = "blue"
    element.style.backgroundColor = "#87CEEB"
    element.style.border = "2px solid red"
 }

//by class
// let className = document.getElementsByClassName('par')
// console.log(className[0]);

//by id
let idName = document.getElementById('para1')
console.log(idName);
// idName.innerText = "hello everyone"

//create element
let body = document.body
let heading1= document.createElement('h1')
heading1.innerText = "DOM class"
heading1.className = "head1"
body.appendChild(heading1)
heading1.setAttribute('id','heading1')
heading1.style.color = "green"
heading1.style.textAlign = "center"
heading1.style.backgroundColor = "#D3D3D3"
heading1.style.border = "2px solid black"
heading1.style.padding = "10px"
heading1.style.fontFamily = "Arial, sans-serif"
console.log(heading1);

