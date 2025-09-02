  const center = document.querySelector("#center");


  const throttleFunction = (func, delay) => {
    let lastCall = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall > delay) {
        lastCall = now;
        func(...args);
      }
    };
  };
  center.addEventListener("mousemove",
     throttleFunction((dets) => {
     //less repetation code
    var div =  document.createElement("div");
    div.style.left = dets.clientX + "px"
     div.style.top = dets.clientY +"px"
   

     var img = document.createElement("img");
     img.setAttribute("src", "https://cdn.pixabay.com/photo/2020/06/04/22/43/range-rover-5260746_1280.jpg");
     
     div.appendChild(img);



    div.classList.add('imagediv');
    document.body.appendChild(div);

    gsap.to(img,{
      y:"0",
      ease:Power1,
      duration: 0.6
    })

     gsap.to(img,{
      y:"100%",
      ease:Power2,
      delay:.4,
      duration: 1
    })


    setTimeout(function(){
    div.remove()
    },800)
  }, 400));
