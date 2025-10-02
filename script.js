const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

  if(navToggle){
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }

  if(navClose){
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    });
  }


  const navlink=document.querySelectorAll('.nav-link')
  const linkAction=() =>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navlink.forEach(n => n.addEventListener('click',linkAction))

  
  const shadowHeader=() =>{
    const header=document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
: header.classList.remove('shadow-header')
  }
  window.addEventListener('scroll', shadowHeader)


  const scrollup=()=>{
    const scrollup=document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll') :  scrollup.classList.remove('show-scroll')
  }
  window.addEventListener('scroll',scrollup)

  const sections=document.querySelectorAll('section[id]')
  const scrollActive = () =>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
      const sectionHeight=current.offsetHeight,
      sectionTop=current.offsetTop - 58,
      sectionId=current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }

    })
  }
  window.addEventListener('scroll',scrollActive)


  const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
  })
  sr.reveal(`.home-data`,`.about-data`,`.footer-container`)
  sr.reveal(`.home-images`,{delay:1000})
  sr.reveal(`.home-1`,{delay:1000, scale:0 ,rotate: {z :45}})
  sr.reveal(`.home-2,.home-3`,{delay:1400, scale:0 ,rotate: {z :45}})
  sr.reveal(`.home-4`,{delay:1700, scale:0 ,rotate: {z :45}})
  sr.reveal(`.home-5`,{delay:1800, scale:0 ,rotate: {z :45}})
  sr.reveal(`.about-image1`,{delay:600, origin:'right'})
  sr.reveal(`.about-image2`,{delay:800, origin:'left'})
  sr.reveal(`.about-tooltip1`,{delay:1600, origin:'left'})
  sr.reveal(`.about-tooltip2`,{delay:1800, origin:'right'})
  sr.reveal(`.order-card:nth-child(1)`,{origin:'right'})
  sr.reveal(`.order-card:nth-child(2)`,{ origin:'left'})
  sr.reveal(`.order-tooltip1`,{delay:800, origin:'right'})
  sr.reveal(`.order-tooltip2`,{delay:800, origin:'left'})
  sr.reveal(`.combo-titles`,{origin:'bottom'})
  sr.reveal(`.combo-image`,{delay:1000})
  sr.reveal(`.combo-data`,{delay:1600})
  sr.reveal(`.combo-numbers`,{delay:1600,origin:'bottom'})
  sr.reveal(`.contact-data`,{origin:'right'})
  sr.reveal(`.contact-info`,{origin:'left'})
  sr.reveal(`.contact-image1`,{delay:1000,distance:0,scale:0,rotate:{z: -45}})
  sr.reveal(`.contact-image2`,{delay:1200,distance:0,scale:0,rotate:{z: 45}})
  sr.reveal(`.contact-1`,{delay:1400,scale:0,rotate:{z: 45}})
  sr.reveal(`.contact-3`,{delay:1600,scale:0,rotate:{z: 45}})
  sr.reveal(`.contact-2`,{delay:1800,scale:0,rotate:{z: 45}})
  sr.reveal(`.contact-4`,{delay:2000,scale:0,rotate:{z: 45}})