const slider = document.querySelector(`.slider`)
const next = slider.querySelector(`.next`)
const sliderContainer = slider.querySelector(`.slider-container`)
const sliderImgwrapper = slider.querySelectorAll(`.slider-img-wrapper`)
const prev = slider.querySelector(`.prev`)
const sliderPoint = slider.querySelectorAll(`.slider-point`)
const sliderImg = slider.querySelectorAll(`.slider-img`)
console.log(next)
console.log(slider)
console.log(sliderContainer)
console.log(sliderImgwrapper)
console.log(prev)
console.log(sliderPoint)
console.log(sliderImg)
sliderContainer.style.width = `calc(100% * ${sliderImgwrapper.length})`
sliderImgwrapper.forEach(( _ , i )=>{
    sliderImgwrapper[i].style.width = `calc(75% / ${sliderImgwrapper.length})`
})

let foto = 0
let anchoImg = 74 / sliderImgwrapper.length
function moverContainer (){
    sliderContainer.style.transform = `translateX(-${anchoImg * foto}%)`
}
function hacerPequeno (){
    sliderImg.forEach(( _ , i)=>{
        sliderImg[i].classList.add('isNotActive')
    })
    sliderImg[foto].classList.remove('isNotActive')
}
function buttonOn (){
    sliderPoint.forEach(( _ , i )=>{
        sliderPoint[i].classList.remove('isButtonActive')
    })
    sliderPoint[foto].classList.add('isButtonActive')

}
const anadirFoto =()=>{
    foto++
    if( foto >=sliderImgwrapper.length ){
        foto = 0
    }
    moverContainer()
    hacerPequeno()
    buttonOn()
    
}

const quitarFoto =()=>{
    foto--
    if(foto<=-1){
        foto = sliderImgwrapper.length - 1
    }
    moverContainer()
    hacerPequeno()
    buttonOn()

    
}
const moverAfoto =( _ , i )=>{
    sliderPoint[i].addEventListener( 'click' , ()=>{
        foto = i
        moverContainer()
        hacerPequeno()
        buttonOn()
    
    })
   
}

next.addEventListener('click' , anadirFoto)

prev.addEventListener('click' , quitarFoto )
sliderPoint.forEach(moverAfoto)
