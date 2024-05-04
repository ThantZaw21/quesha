// const slide = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function nextSlide(){
//     slide[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % slide.length;
//     slide[currentSlide].classList.add('active');
// }
// nextSlide();
// setInterval(nextSlide, 4000);

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: '2500ms',
    delay: 400
 });
ScrollReveal().reveal('.navar , .description', {origin:'top' , delay:500});
ScrollReveal().reveal('.topic', { delay: 500 , origin:'top' });
ScrollReveal().reveal('.punchline', { delay: 2000 });

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
 slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Start the slideshow immediately
nextSlide();
setInterval(nextSlide, 4000); // Change slide every 4 seconds

window.addEventListener('scroll',function(){
    const nav = document.getElementById('navar');
    if(window.scrollY>0){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
})

function toggleSideBar(){
   var sidebar= document.getElementById("navar");
   sidebar.style.top="0";
}

function closeSideBar(){
    var close = document.getElementById('navar');
    close.style.top="-300px"
}