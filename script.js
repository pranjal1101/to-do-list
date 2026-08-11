let btn= document.querySelector('.add-icon');
let input=document.querySelector('#add-input');
let task=document.querySelector('.tasks');
btn.addEventListener('click',function(){
    let inputValue=input.value;
    task.innerHTML += `<div class="task">${inputValue}</div>`;
})