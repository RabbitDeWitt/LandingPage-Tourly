const overlay = document.querySelector('[data-overlay]')
const navOpenBtn = document.querySelector('[data-open-menu-btn]')
const navCloseBtn = document.querySelector('[data-close-menu-btn]')
const navbar = document.querySelector('[data-navbar]')
const navLinks = document.querySelector('[data-navbar-link]')

const navElemArr = [navOpenBtn, navCloseBtn, overlay]

const navToggleEvent = (elem) => {
  for(let i = 0; i < elem.length; i++){
    elem[i].addEventListener('click', () =>{
      navbar.classList.toggle("active")
      overlay.classList.toggle("active")
    })
  }
}

navToggleEvent(navElemArr)
navToggleEvent(navLinks)


const header = document.querySelector('[data-header]')

window.addEventListener('scroll', () => {
  if(window.scrollY >= 124){
    header.classList.add("active")
  }else{
    header.classList.remove("active")
  }
})
