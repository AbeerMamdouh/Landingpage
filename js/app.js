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


// Build navbar
const lists = document.createElement('ul');
lists.setAttribute("class", "lists__open");
lists.setAttribute("id", "navbar__list");

const arrOfLinks = ["Section 1", "Section 2", "Section 3", "Section 4"];

arrOfLinks.forEach(link => { 
  const links = document.createElement('a');
  links.textContent = link;
  links.setAttribute("class", "page__scroll");
  links.setAttribute("href", "#"+link.toLowerCase().replace(/\s/g, ''))

  const li = document.createElement('li');
  li.setAttribute("class", "section_item");
  li.appendChild(links);
  lists.appendChild(li);
});

  const mainNavBar = document.querySelector('.navbar__menu');
  mainNavBar.appendChild(lists);

  

// Scroll to section on link click with smooth scrolling
let ul = document.getElementById("navbar__list");

let listItems = ul.getElementsByTagName("a");

for(li of listItems){
  li.addEventListener('click', function(event){
    removeClass();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
    if(this.classList.contains('active')){
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }
  })
}

function removeClass(){
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('active');
  }
}



// Add class 'active' to section when scrolling
const listOfItems = document.querySelectorAll('.page__scroll');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  listOfItems.forEach((item) => item.classList.remove('active'));
  listOfItems[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);




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



// Scroll to section on link click with smooth scrolling in tablet & mobile screens
let dropDowns = Array.from(document.querySelectorAll('.nav-link'));

const handleClick = (e) => {
  // e.preventDefault();
  dropDowns.forEach(node => {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
}

dropDowns.forEach(node => {
  node.addEventListener('click', handleClick)
});



// Add class 'active' to section when scrolling in toggler menu for tablet & mobile screens
function changeItemState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  dropDowns.forEach((i) => i.classList.remove('active'));
  dropDowns[index].classList.add('active');
}

changeItemState();
window.addEventListener('scroll', changeItemState);











