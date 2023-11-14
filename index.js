function makeGreen(){
       document.body.style.backgroundColor="Green";   
}

const redButton =document.getElementById('make-red')
redButton.onclick= makeRed;
function makeRed(){
          document.body.style.backgroundColor='red';
}

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makepurple(){
          document.body.style.backgroundColor="purple"
}

const blackButton=document.getElementById('make-black');
blackButton.addEventListener('click',function(){
          document.body.style.backgroundColor='black'
})

document.getElementById('make-blue').addEventListener('click',function (){
document.body.style.backgroundColor="blue";
})

document.getElementById('make-yellow').addEventListener('mousemove',function(){
          document.body.style.backgroundColor="yellow"
})
// document.getElementById('mouseout').addEventListener('mouseout',function(){
//           document.body.style.backgroundColor="blue"
// })
// document.getElementById('make-yellow').addEventListener('dblclick',function(){
//           document.body.style.backgroundColor="yellow"
// })
const changeButton =document.getElementById('change')
changeButton.addEventListener('click',function(){
          changeButton.innerText='this is good'
})



         