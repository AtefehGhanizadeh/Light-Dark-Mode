
const toggleSwitch=document.querySelector('input[type="checkbox"]')
const nav=document.querySelector('nav')
const mode=document.querySelector('#mode-id')
const img1=document.querySelector('#img1')
const img2=document.querySelector('#img2')
const img3=document.querySelector('#img3')
const paragraph=document.querySelector('p')
const modeIcon=document.querySelector('.fa-sun')



function imageMode(theme){

    img1.src=`./img/undraw_proud_coder_${theme}.svg`
    img2.src=`./img/undraw_feeling_proud_${theme}.svg`
    img3.src=`./img/undraw_conceptual_idea_${theme}.svg`
}


function toggleLightDarkMode(isDark){

    nav.style.backgroundColor=isDark ? "rgba(0, 0, 0, 0.5)" : "rgba(253, 253, 253, 0.596)"
    mode.textContent=isDark? "Dark Mode" : "Light Mode"
    paragraph.style.backgroundColor=isDark?"rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
    isDark?imageMode('dark') : imageMode('light')
    isDark?document.documentElement.setAttribute('data-theme','dark') : document.documentElement.setAttribute('data-theme','light')
    isDark?modeIcon.classList.replace('fa-sun','fa-moon') : modeIcon.classList.replace('fa-moon','fa-sun')
    isDark?localStorage.setItem('mode','dark') : localStorage.setItem('mode','light')
    isDark?localStorage.setItem('check','checked') : localStorage.setItem('check','unchecked')
}


function switchTheme(e){

    const state=e.target.checked

    toggleLightDarkMode(state)
}

function getModeFromStorage(){


    const mode=localStorage.getItem('mode')

    if(mode=='dark'){
        toggleLightDarkMode(true)
    }
    else{
        toggleLightDarkMode(false)
    }

    isChecked()


}

function isChecked(){

    const check=localStorage.getItem('check')

    if(check=='checked'){
        toggleSwitch.checked=true
    }
    else{
        toggleSwitch.checked=false
    }

}

document.addEventListener('DOMContentLoaded',getModeFromStorage)


toggleSwitch.addEventListener('change' , switchTheme)