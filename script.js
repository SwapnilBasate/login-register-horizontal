var demoButton = document.querySelector('.container .left button')
var leftDiv=document.querySelector('.container .left')
var rightDiv=document.querySelector('.container .right')
var heading = document.querySelector('.container .left h2')
var text = document.querySelector('.container .left p')
var fnField = document.querySelector('#fnField')
var cpField = document.querySelector('#cpField')
var title = document.querySelector('.container .right .title h2')
var actionButton=document.querySelector('.container .right form button')

demoButton.addEventListener('click',()=>{
  if(demoButton.innerHTML==='Register'){
    leftDiv.style.transform='translateX(425px)'
    rightDiv.style.transform='translateX(-425px)'
    demoButton.innerHTML='Login'
    heading.innerHTML='Create your new account!'
    text.innerHTML='Already have account, click here to login!'
    fnField.style.maxHeight='100px'
    fnField.style.padding='8px'
    cpField.style.maxHeight='100px'
    cpField.style.padding='8px'
    title.innerHTML='Register'
    actionButton.innerHTML='Register'
  }
  else if(demoButton.innerHTML==='Login'){
    leftDiv.style.transform='translateX(0px)'
    rightDiv.style.transform='translateX(0px)'
    demoButton.innerHTML='Register'
    heading.innerHTML='Hi, Welcome user !!'
    text.innerHTML='Dont have account? To create a new account click here!'
    fnField.style.maxHeight='0px'
    fnField.style.padding='0px'
    cpField.style.maxHeight='0px'
    cpField.style.padding='0px'
    title.innerHTML='Login'
    actionButton.innerHTML='Login'
  }
})

// gsap
var tl1 = gsap.timeline()

tl1.from('.contact-form .title2 h2',{
    opacity:0,
    y:-100
})
tl1.from('.contact-form .container .left h2',{
    opacity:0,
    x:-100
})
tl1.from('.contact-form .container .left p',{
    opacity:0,
    x:-100
})
tl1.from('.contact-form .container .left button',{
    opacity:0,
    x:-100
})
tl1.from('.contact-form .container .right form .title h2',{
    opacity:0,
    y:-100
})
tl1.from('.contact-form .container .right form button',{
    opacity:0,
    x:100
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.footer',
        scroller:'body',
        start:'top 240%',
        end:'top 10%',
        scrub:2,
    }
})
tl2.from('.footer .container2 .row .col',{
    opacity:0,
    y:-400,
})

