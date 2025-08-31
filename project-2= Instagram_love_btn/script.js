var con = document.querySelector("#container")
var loveicon = document.querySelector("i");

con.addEventListener("dblclick" ,function(){
loveicon.style.transform='translate(-50%, -50%) scale(1)';
loveicon.style.opacity = 0.8;

setTimeout(function(){
    loveicon.style.transform ='translate(-50%, -50%) scale(0)'
    loveicon.style.opacity = 0 ;
},1000)
})

