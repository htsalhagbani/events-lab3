let stopButton=document.getElementById('stopButton');
let stopLight=document.getElementById('stopLight');


stopButton.addEventListener('click',()=>{
    stopLight.style.background = 'red';
    slowLight.style.background = 'black';
    goLight.style.background = 'black';


    
})

let slowButton=document.getElementById('slowButton');
let slowLight=document.getElementById('slowLight');

slowButton.addEventListener('click',()=>{
    slowLight.style.background = 'orange';
    stopLight.style.background = 'balck';
    goLight.style.background = 'black';


    
})



let goButton=document.getElementById('goButton');
let goLight=document.getElementById('goLight');

goButton.addEventListener('click',()=>{
    goLight.style.background = 'green';
    stopLight.style.background = 'black';
    slowLight.style.background = 'black';
    
})