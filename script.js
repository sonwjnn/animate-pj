let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
sections = Array.from(sections).filter(sec => sec.className != 'parallax')
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 250
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })

  let header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 100)

  iconMenu.classList.remove('bx-x')
  navBar.classList.remove('active')
}

var typed = new Typed('.multi-text', {
  strings: ['Front End Developer', 'Student at HUFI'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

let iconMenu = document.querySelector('.menu-icon i')
let navBar = document.querySelector('.navbar')

iconMenu.onclick = () => {
  iconMenu.classList.toggle('bx-x')
  navBar.classList.toggle('active')
}
