const overlay = document.querySelector('[data-overlay]')
const navOpenBtn = document.querySelector('[data-open-menu-btn]')
const navCloseBtn = document.querySelector('[data-close-menu-btn]')
const navbar = document.querySelector('[data-navbar]')
const navLinks = document.getElementsByClassName('navbar-link')

const navElemArr = [navOpenBtn, navCloseBtn, overlay]

const navToggleEvent = (elem) => {
  console.log(navLinks)
  for(let i = 0; i < elem.length; i++){
    elem[i].addEventListener('click', () =>{
      document.body.classList.toggle("active")
      navbar.classList.toggle("active")
      overlay.classList.toggle("active")
    })
  }
}

navToggleEvent(navLinks)
navToggleEvent(navElemArr)


const header = document.querySelector('[data-header]')
const goToTopBtn = document.querySelector('[data-go-top]')

window.addEventListener('scroll', () => {
  if(window.scrollY >= 100){
    header.classList.add("active")
    goToTopBtn.classList.add("active")
  }else{
    header.classList.remove("active")
    goToTopBtn.classList.remove("active")
  }
})
