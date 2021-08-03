const svgCity = document.getElementById('svg-city')
const svgLang = document.getElementById('svg-lang')
const dropdownCityAnimation = document.getElementById('dropdownCity')
const dropdownLangAnimation = document.getElementById('dropdownLang')
const buttonCity = document.getElementById('buttonCity')
const buttonLang = document.getElementById('buttonLang')
let modeDropdownCity = false
let modeDropdownLang = false

dropdownCityAnimation.addEventListener('mouseover', () => {
    if (modeDropdownCity === false) {
        svgCity.style.transform = 'rotate(180deg)'
    }
})
dropdownCityAnimation.addEventListener('mouseout', () => {
    if (modeDropdownCity === false) {
        svgCity.style.transform = 'rotate(0deg)'
    }
})

dropdownLangAnimation.addEventListener('mouseover', () => {
    if (modeDropdownLang === false) {
        svgLang.style.transform = 'rotate(180deg)'
    }
})
dropdownLangAnimation.addEventListener('mouseout', () => {
    if (modeDropdownLang === false) {
        svgLang.style.transform = 'rotate(0deg)'
    }
})
buttonLang.addEventListener('click', () => {
    if (modeDropdownLang) {
        modeDropdownLang = false
        dropdownLangAnimation.style.display = 'none'
        svgLang.style.transform = 'rotate(0)'
    } else {
        modeDropdownLang = true
        dropdownLangAnimation.style.display = 'block'
        svgLang.style.transform = 'rotate(180deg)'
    }
})

buttonCity.addEventListener('click', () => {
    if (modeDropdownCity) {
        modeDropdownCity = false
        dropdownCityAnimation.style.display = 'none'
        svgCity.style.transform = 'rotate(0)'
    } else {
        modeDropdownCity = true
        dropdownCityAnimation.style.display = 'block'
        svgCity.style.transform = 'rotate(180deg)'
    }
})

// Mobile version

const buttonLangMobile = document.getElementById('buttonLangMobile')
const buttonCityMobile = document.getElementById('buttonCityMobile')
const dropdownLangMobile = document.getElementById('dropdownLangMobile')
const dropdownCityMobile = document.getElementById('dropdownCityMobile')

buttonLangMobile.addEventListener('click', () => {
    buttonLangMobile.classList.toggle('dropdownListOpen');
    dropdownLangMobile.classList.toggle('dropdownListOpen');
})

buttonCityMobile.addEventListener('click', () => {
    buttonCityMobile.classList.toggle('dropdownListOpen');
    dropdownCityMobile.classList.toggle('dropdownListOpen');
})