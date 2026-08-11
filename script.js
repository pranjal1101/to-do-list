let btn=document.querySelector('.add-icon');
let input=document.querySelector('#add-input');
let tasksContainer=document.querySelector('.tasks');
let deleteBtn=document.querySelector('.delete-icon');

btn.addEventListener('click',function(){
    let inputValue=input.value;

    if(inputValue.trim()===''){
        return;
    }

    tasksContainer.innerHTML+=`<div class="task" onclick="this.style.textDecoration='line-through'">${inputValue}</div>`;

    input.value='';
});
deleteBtn.addEventListener('click',function(){
    tasksContainer.innerHTML='';
});