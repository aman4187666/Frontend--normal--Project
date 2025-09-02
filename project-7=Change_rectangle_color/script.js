 var reccenter = document.querySelector("#centerrectangle");

 reccenter.addEventListener("mousemove",function(dets){
   var rectlocation =  reccenter.getBoundingClientRect();
   var insiderectval = dets.clientX - rectlocation.left;

   if(insiderectval < rectlocation.width/2){
        var redcolor = gsap.utils.mapRange(0,rectlocation.width/2,255,0,insiderectval);
        gsap.to(reccenter,{
           backgroundColor: `rgb(${redcolor},0,0)`,
        });

 }else{
     var bluecolor = gsap.utils.mapRange(0,rectlocation.width/2,0,255,insiderectval);
        gsap.to(reccenter,{
           backgroundColor: `rgb(0,0,${bluecolor})`,
           
        });

      
    }
    });


    reccenter.addEventListener("mouseleave",function(dets){
       gsap.to(reccenter,{
         backgroundColor : "White"
       })
    })