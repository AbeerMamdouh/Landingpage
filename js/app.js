/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* Define Global Variables*/
const lists = document.querySelectorAll('.page__scroll');

const sections = document.querySelectorAll('section');

/* End Global Variables*/


// Scroll to section on link click with smooth scrolling
lists.forEach(list => {

    list.addEventListener("click", (e) => {
        
        document.querySelector(e.target.dataset.section).scrollIntoView({

           behavior: 'smooth'
        });
    });
});


// Add class 'active' to section when scrolling
function changeLinkState() {

  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
       lists.forEach((list) => list.classList.remove('active'));

       lists[index].classList.add('active');

  }

changeLinkState();

window.addEventListener('scroll', changeLinkState);



/*

function changeNavbarState(e){

if(e.target.display === 'show'){

  navbarMenu.style.display = 'block';

}else{

  navbarMenu.style.display = 'none';
}

}

setTimeout(changeNavbarState, 3000);

window.addEventListener('scroll', changeNavbarState);

*/




/*End Main Functions
 * Begin Events
*/

// Build menu 
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("navbar-toggler-icon")) {
      document.getElementById("navbarResponsive").classList.toggle("show");
  } else if (event.target.classList.contains("nav-link")) {
      document.getElementById("navbarResponsive").classList.remove("show");
  }
});

let el = document.getElementsByClassName('nav-link');
if (el.onclick) {
  document.getElementById("navbarResponsive").classList.remove("show");
}




