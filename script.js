    
let showButton = document.querySelector('.show__more');
let showContent = document.querySelector('.hidden__content');

showButton.addEventListener("click", ()=>{
    showContent.classList.toggle("show");
    showButton.innerHTML = "Show Less"
})

const prev = document.querySelector('.drugs__slideshow__prev'); 
const next = document.querySelector('.drugs__slideshow__next');
const slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".drugs__slideshow__pagination--dot");

var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        
        if (n > slides.length) 
        {
            slideIndex = 1
        }    
        if (n < 1) 
        {
            slideIndex = slides.length
        }
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }

prev.addEventListener('click', ()=>{
    plusSlides(-1);
})
next.addEventListener('click', ()=>{
    plusSlides(1);
})
let main__img = document.querySelector(".main__img");
let modalOpen = document.querySelectorAll(".drugs__slideshow__images")
let modalBg = document.querySelector(".modal__background");
let current = document.getElementsByClassName("border");
let thumb = document.querySelectorAll(".thumbimg__box--img");
let openVideo = document.querySelector(".modal__video");
let closeVideo = document.querySelector(".modal__video--close");
let playVideo = document.querySelector(".quickvideo__thumb");



playVideo.addEventListener("click" , (e)=>{
    openVideo.classList.add("play");
})
document.querySelector(".quickvideo__play").addEventListener("click" , (e)=>{
    openVideo.classList.add("play");
})


closeVideo.addEventListener("click" , (e)=>{
    openVideo.classList.remove("play");
})

// if(openVideo.classList.containscontains(".play")){
//     document.documentElement.addEventListener("click" , ()=>{
//     if(e.target != document.querySelector(".modal__video")){
//         console.log(e.target);
//         console.log(document.querySelector(".modal__video"));
//         openVideo.classList.remove("play");
//     }
// })
// }

for(let i=0; i<modalOpen.length;i++)
modalOpen[i].addEventListener("click" , ()=>{
    modalBg.classList.add("show");
    main__img.src = modalOpen[i].src;
    thumb[i].className += " border";
})

let closeModal = document.querySelector(".close__btn");
closeModal.addEventListener("click" , ()=>{
    modalBg.classList.remove("show");
    for(let i=0; i<modalOpen.length;i++){
        current[0].className = current[0].className.replace(" border", "");
    }
})
for(let i=0; i<thumb.length;i++){
    thumb[i].addEventListener("click", ()=>{
        main__img.src = thumb[i].src;
        current[0].className = current[0].className.replace(" border", "");
        thumb[i].className += " border";
    })
}

var list = ['Overview', 'Uses and benefits', 'Side effects', 'How to use','How drug works','Safety advice','Missed dose','All substitutes','Quick tips','Fact box','Patient concerns'];

var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        autoHeight: true, 
        freeMode: {
            enabled: true,
            sticky: false,
          },
        spaceBetween: 0,
        scrollbar: {
            el: ".swiper-scrollbar",
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (list[index]) + '</span>';
          },
        },
        mousewheel: {
            enabled: true,
          },
        keyboard: true,
        speed: 1000,

      });
   