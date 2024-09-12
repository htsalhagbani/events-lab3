let stopButton=document.getElementById('stopButton');
let stopLight=document.getElementById('stopLight');
let goButton=document.getElementById('goButton');
let goLight=document.getElementById('goLight');
let slowButton=document.getElementById('slowButton');
let slowLight=document.getElementById('slowLight');


stopButton.addEventListener('click',()=>{
    stopLight.style.background = 'red';
    slowLight.style.background = 'black';
    goLight.style.background = 'black';


    
})



slowButton.addEventListener('click',()=>{
    slowLight.style.background = 'orange';
    stopLight.style.background = 'black';
    goLight.style.background = 'black';


    
})




goButton.addEventListener('click',()=>{
    goLight.style.background = 'green';
    stopLight.style.background = 'black';
    slowLight.style.background = 'black';
    
})