const imgs = document.querySelectorAll(".column");

const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");

let currentIndex = 0;
let time = 5000; // default time for auto slideshow
const defClass = (startPos, index) => {
  if(currentIndex == 2){

    rightArrow.style.pointerEvents = "none";

  }
  else{
    rightArrow.style.pointerEvents = "all";
  }

  if(currentIndex == 0){

    leftArrow.style.pointerEvents = "none";

  }
  else{
    leftArrow.style.pointerEvents = "all";
  }

      for (let i = startPos; i < imgs.length; i++) {

        setTimeout(() => {
          imgs[i].classList.remove("cardactive"); 
        }, 400);
        
        
        }
        setTimeout(() => {
          imgs[index].classList.add("cardactive");
        }, 400);
       

};
defClass(1, 0);

leftArrow.addEventListener("click", function () {
    currentIndex <= 0 ? (currentIndex = imgs.length - 1) : currentIndex--;
    defClass(0, currentIndex);

});

rightArrow.addEventListener("click", function () {
  
  currentIndex >= imgs.length - 1 ? (currentIndex = 0) : currentIndex++;
 
  defClass(0, currentIndex);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length - 1 ? (currentIndex = 0) : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide();

document.addEventListener('DOMContentLoaded', function(){


  var imgs = document.querySelectorAll('img');
  Array.prototype.forEach.call(imgs, function(el, i) {
      if (el.tabIndex <= 0) el.tabIndex = 10000;
  });
});
      