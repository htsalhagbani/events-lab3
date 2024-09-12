let stopButton=document.getElementById('stopButton');
let stopLight=document.getElementById('stopLight');


stopButton.addEventListener('click',()=>{
    stopLight.style.background = 'red';
    
})

let slowButton=document.getElementById('slowButton');
let slowLight=document.getElementById('slowLight');

slowButton.addEventListener('click',()=>{
    slowLight.style.background = 'orange';
    
})



let goButton=document.getElementById('goButton');
let goLight=document.getElementById('goLight');

goButton.addEventListener('click',()=>{
    goLight.style.background = 'green';
    
})