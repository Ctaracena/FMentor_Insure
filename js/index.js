const menuBtn = document.querySelector('.menu')
const mobileNav = document.querySelector('.mobile-nav')

mobileNav.style.display = 'none'

menuBtn.addEventListener('click', () => {
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'flex'
    mobileNav.style.animationName = 'slide-in-right'
    menuBtn.src = 'images/close.svg'
  } else {
    mobileNav.style.display = 'none'
    menuBtn.src = 'images/icon-hamburger.svg'
  }
})


// Languages Section

const langBtn = document.querySelector('.lang-icon-container')
const flag = document.querySelector('.flag')
// header
const work = document.getElementById('work')
const account = document.getElementById('account')
const headerBtn = document.getElementById('header-btn')
const mobileWork = document.getElementById('mobile-work')
const mobileAccount = document.getElementById('mobile-account')
const mobileHeaderBtn = document.getElementById('mobile-header-btn')
// hero
const heroTitle = document.getElementById('hero-title')
const heroP = document.getElementById('hero-p')
const heroBtn = document.getElementById('hero-btn')
// different
const differentTitle = document.getElementById('dif-title')
const snappy = document.getElementById('snappy')
const snappyText = document.getElementById('snappy-text')
const affordable = document.getElementById('affordable')
const affordableText = document.getElementById('affordable-text')
const people = document.getElementById('people')
const peopleText = document.getElementById('people-text')
const bannerTitle = document.getElementById('banner-title')
const bannerBtn = document.getElementById('banner-btn')
//footer
const listA = document.getElementById('listA')
const listA1 = document.getElementById('listA1')
const listA2 = document.getElementById('listA2')
const listA3 = document.getElementById('listA3')
const listA4 = document.getElementById('listA4')

const listB = document.getElementById('listB')
const listB1 = document.getElementById('listB1')
const listB2 = document.getElementById('listB2')
const listB3 = document.getElementById('listB3')

const listC = document.getElementById('listC')
const listC1 = document.getElementById('listC1')
const listC2 = document.getElementById('listC2')
const listC3 = document.getElementById('listC3')

const listD = document.getElementById('listD')
const listD1 = document.getElementById('listD1')
const listD2 = document.getElementById('listD2')
const listD3 = document.getElementById('listD3')


const spanish = () => {
  // header
  work.innerHTML = 'Cómo Trabajamos'
  account.innerHTML = 'Cuenta'
  headerBtn.innerHTML = 'ver planes'
  mobileWork.innerHTML = 'Cómo Trabajamos'
  mobileAccount.innerHTML = 'Cuenta'
  mobileHeaderBtn.innerHTML = 'ver planes'
  // hero
  heroTitle.innerHTML = 'Un Seguro más humano'
  heroP.innerHTML = 'Obten tu cobertura de seguro de vida más fácil y rápido. Nosotros combinamos nuestra experiencia y tecnología para ayudarte a encontrar un plan que sea el adecuado para tí. Asegurando que tus seres queridos y tú estén protegidos.'
  heroBtn.innerHTML = 'ver planes'
  // different
  differentTitle.innerHTML = 'Somos Diferentes'
  snappy.innerHTML = 'Proceso Rápido'
  snappyText.innerHTML = 'Nuestro proceso de aplicación puede ser completado en minutos, no horas. No te quedes atascado llenando tediosos formularios.'
  affordable.innerHTML = 'Precios Accesibles'
  affordableText.innerHTML = 'Nosotros no queremos que te preocupes por altos costos mensuales. Nuestros precios pueden ser bajos, pero aún así ofrecen la mejor cobertura posible.'
  people.innerHTML = 'Personas Primero'
  peopleText.innerHTML = 'Nuestros planes no están llenos de condiciones y clausulas para evitar hacer pagos. Nos aseguramos que estes cubierto cuando más lo necesitas.'
  bannerTitle.innerHTML = 'Conoce más acerca de nosotros'
  bannerBtn.innerHTML = 'conoce más'
  // Footer
  listA.innerHTML = 'Nosotros'
  listA1.innerHTML = 'Como trabajamos'
  listA2.innerHTML = 'Por que un seguro?'
  listA3.innerHTML = 'Ver planes'
  listA4.innerHTML = 'reseñas'

  listB.innerHTML = 'Ayuda'
  listB1.innerHTML = 'preguntas frecuentes'
  listB2.innerHTML = 'términos de uso'
  listB3.innerHTML = 'politica de privacidad'

  listC.innerHTML = 'Contacto'
  listC1.innerHTML = 'ventas'
  listC2.innerHTML = 'soporte'
  listC3.innerHTML = 'chat en vivo'

  listD.innerHTML = 'otros'
  listD1.innerHTML = 'carreras'
  listD2.innerHTML = 'prensa'
  listD3.innerHTML = 'licencias'
}

const english = () => {
  // header
  work.innerHTML = 'How we work'
  account.innerHTML = 'Account'
  headerBtn.innerHTML = 'view plans'
  mobileWork.innerHTML = 'How we work'
  mobileAccount.innerHTML = 'Account'
  mobileHeaderBtn.innerHTML = 'view plans'
  // hero
  heroTitle.innerHTML = 'Humanizing your insurance.'
  heroP.innerHTML = `Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.`
  heroBtn.innerHTML = 'View plans'
  // different
  differentTitle.innerHTML = `We’re different`
  snappy.innerHTML = 'Snappy Process'
  snappyText.innerHTML = `Our application process can be completed in minutes, not hours. Don’t get 
  stuck filling in tedious forms.`
  affordable.innerHTML = 'Affordable Prices'
  affordableText.innerHTML = ` We don’t want you worrying about high monthly costs. Our prices may be low, 
  but we still offer the best coverage possible.`
  people.innerHTML = 'People First'
  peopleText.innerHTML = `Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it.`
  bannerTitle.innerHTML = 'Find out more about how we work'
  bannerBtn.innerHTML = 'How we work'
  // Footer
  listA.innerHTML = 'Our company'
  listA1.innerHTML = 'How we work'
  listA2.innerHTML = 'Why Insure?'
  listA3.innerHTML = 'View plans'
  listA4.innerHTML = 'Reviews'

  listB.innerHTML = 'Help me'
  listB1.innerHTML = 'FAQ'
  listB2.innerHTML = 'Terms of use'
  listB3.innerHTML = 'Privacy policy'

  listC.innerHTML = 'Contact'
  listC1.innerHTML = 'Sales'
  listC2.innerHTML = 'Support'
  listC3.innerHTML = 'Live chat'

  listD.innerHTML = 'Others'
  listD1.innerHTML = 'Careers'
  listD2.innerHTML = 'Press'
  listD3.innerHTML = 'Licenses'
}

let lang = 'eng'

langBtn.addEventListener('click', () => {
  if (lang === 'eng') {
    flag.src = 'images/icons8-usa-48.png'
    spanish()
    lang = 'spa'
  } else if (lang === 'spa') {
    flag.src = 'images/icons8-spain-48.png'
    english()
    lang = 'eng'
  }
})




