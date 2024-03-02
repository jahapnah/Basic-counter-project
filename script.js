const content = document.querySelector('#number');

// let increment = ()=>{
//     let value = parseInt(content.innerText);
//     value = value + 1;
//     content.textContent = value;
// }

// let decrement = ()=>{
//     let value = parseInt(content.innerText);
//     value = value - 1;
//     content.textContent = value;
// }

let plusbttn = document.querySelector('#plus-btn');

plusbttn.addEventListener('click',()=>{
    let value = parseInt(content.innerText);
    value = value + 1;
    content.innerText = value;
})

let minbttn = document.querySelector('#min-btn');

minbttn.addEventListener('click',()=>{
    let value = parseInt(content.innerText);
    value = value - 1;
    content.innerText = value;
})