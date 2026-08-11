let btn=document.querySelector('.add-icon');
let input=document.querySelector('#add-input');
let tasksContainer=document.querySelector('.tasks');

btn.addEventListener('click',function(){
    let inputValue=input.value;

    if(inputValue.trim() === ''){
        return;
    }

    tasksContainer.innerHTML += `<div class="task">${inputValue}</div>`;
});