var arr = [
  { dp: "https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804_1280.jpg" },
  { dp: "https://cdn.pixabay.com/photo/2015/05/30/19/32/ferrari-790611_1280.jpg" },
  { dp: "https://cdn.pixabay.com/photo/2018/05/20/23/36/mercedes-3417100_1280.jpg" },
  { dp: "https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374450_1280.jpg" },
  { dp: "https://cdn.pixabay.com/photo/2020/06/22/19/30/automobile-5330343_1280.jpg" },
  { dp: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" }
];

var allstories = document.querySelector("#stories");
var clutter = "";

arr.forEach(function(elem, idx) {
  clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
              </div>`;
});

allstories.innerHTML = clutter;

allstories.addEventListener("click", function(dets){
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage =
    `url(${arr[dets.target.id].dp})`;  // ✅ fixed line


    setTimeout(function(){
  document.querySelector("#full-screen").style.display = "none";
    },3000)
});