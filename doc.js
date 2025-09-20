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
    element.style.padding = "10px"
 }

//by class
// let className = document.getElementsByClassName('par')
// console.log(className[0]);

//by id
// let idName = document.getElementById('para1')
// element.style.frontsize = "30px"
// console.log(idName);
// idName.innerText = "hello everyone"

//query selector
// let qSelector = document.querySelector('.par')
// console.log(qSelector);
// qSelector.style.color = "red"

//create element
let h1 = document.createElement('h1')
h1.innerText = "This is created by using DOM"
let body = document.body(h1)
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

//cards
let heading2 = document.createElement('h2')
heading2.innerText = "Card Example"
heading2.style.textAlign = "center"
heading2.style.fontFamily = "Arial, sans-serif"
body.appendChild(heading2)
let card = document.createElement('div')
card.className = "card"
card.style.border = "2px solid black"
card.style.width = "300px"
card.style.margin = "20px auto"
card.style.padding = "10px"
card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"
card.style.borderRadius = "8px"
card.style.fontFamily = "Arial, sans-serif"
let img = document.createElement('img')
img.src = "https://wallpapercave.com/wp/wp6501587.jpg"
img.alt = "Placeholder Image"
img.style.width = "100%"
img.style.height = "200px"
img.style.objectFit = "cover"
img.style.borderRadius = "8px 8px 0 0"
let title = document.createElement('h3')
title.innerText = "Card Title"
title.style.margin = "10px 0"
let description = document.createElement('p')
description.innerText = "This is a simple card example created using JavaScript DOM manipulation."
description.style.color = "#555"
description.style.fontSize = "16px"
description.style.lineHeight = "1.5"
let button = document.createElement('button')
button.innerText = "Learn More"
button.style.backgroundColor = "#4CAF50"
button.style.color = "white"
button.style.border = "none"
button.style.padding = "10px 20px"
button.style.textAlign = "center"
button.style.textDecoration = "none"
button.style.display = "inline-block"
button.style.fontSize = "16px"
button.style.margin = "10px 0"
button.style.cursor = "pointer"
button.style.borderRadius = "6px"
button.onmouseover = function(){
    button.style.backgroundColor = "#45a049"
}
card.appendChild(img)
card.appendChild(title)
card.appendChild(description)
card.appendChild(button)
body.appendChild(card)

