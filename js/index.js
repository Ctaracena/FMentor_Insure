const menuBtn = document.querySelector('.menu')
const mobileNav = document.querySelector('.mobile-nav')

mobileNav.style.display = 'none'

menuBtn.addEventListener('click', () => {
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'flex'
    mobileNav.style.animationName = 'slide-in-right'
    menuBtn.src = '../images/close.svg'
  } else {
    mobileNav.style.display = 'none'
    menuBtn.src = '../images/icon-hamburger.svg'
  }
})
