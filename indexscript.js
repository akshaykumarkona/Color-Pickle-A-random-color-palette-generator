const btn=document.querySelector('button');
const color=document.querySelectorAll('.cool');
const hex=document.querySelectorAll('.hex');

btn.addEventListener('click',func);
function func(){
    for(let i=0; i<color.length; i++){
        const ran="#"+Math.floor(Math.random()*16777215).toString(16);
        color[i].style.background= ran;
        hex[i].innerHTML= ran;
}
}
func();