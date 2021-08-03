const burgerButton = document.getElementById('burgerButtonMenu')
const burgerLineTop = document.getElementById('burgerTopLine')
const burgerLineMiddle = document.getElementById('burgerMiddleLine')
const burgerLineBottom = document.getElementById('burgerBottomLine')
const logotypeBlock = document.getElementById('logotypeTopBlock')
const searchBlock = document.getElementById('searchBlock')
const formBlock = searchBlock.querySelector('.header_form-search')
const userToolsTopBlock = document.getElementById('userToolsTopBlock')
const headerBottomContainer = document.getElementById('headerBottomContainer')

const inputSearch = document.getElementById('inputSearch')
let animationComplete = false
let windowWidthSe = window.innerWidth

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    if (windowWidth < 1201) {
        if (animationComplete === true) {
            headerBottomContainer.style.width = '100%'
            inputSearch.style.setProperty('width', '100%', 'important')
        } else {
            headerBottomContainer.style.width = '0%'
            inputSearch.style.setProperty('width', '0%', 'important')
            searchBlock.style.cssText = `
                width: 0px;
            `
        }
    } else {
        inputSearch.style.setProperty('width', '100%', 'important')
        headerBottomContainer.style.width = '100%'
        burgerLineTop.style.cssText = `
            animation-name: animationBurgerTopLineClose;
            animation-delay: 0.1s;
            animation-duration: 0.2s;
            animation-fill-mode: forwards;
        `
        burgerLineMiddle.style.cssText = `
            animation-name: animationBurgerTopLineClose;
            animation-delay: 0.1s;
            animation-duration: 0.2s;
            animation-fill-mode: forwards;
        `
        burgerLineBottom.style.cssText = `
            animation-name: animationBurgerBottomLineClose;
            animation-delay: 0.1s;
            animation-duration: 0.2s;
            animation-fill-mode: forwards;
        `
        burgerButton.style.cssText = `
            background: white;
            height: 12px;
            transition: background 0.1s, width 0.1s, height 0.1s;
        `
        searchBlock.style.cssText = `
            width: 261px;
            transition: 0.5s;
        `
        logotypeBlock.style.cssText = `
            opacity: 1;
            transition: opacity 0.5s;
        `
        userToolsTopBlock.style.cssText = `
            opacity: 1;
            transition: opacity 0.5s;
        `
        animationComplete = false
    }
});
if (windowWidth < 1201) {
    inputSearch.style.setProperty('width', '0%', 'important')
} else {
    inputSearch.style.setProperty('width', '215px', 'important')
}
burgerButton.addEventListener('click', () => {
    if (animationComplete === false) {
        headerBottomContainer.style.width = '100%'
        burgerLineTop.style.cssText = `
            animation-name: animationBurgerTopLineOpen;
            animation-delay: 0.1s;
            animation-duration: 0.1s;
            animation-fill-mode: forwards;
        `
        burgerLineMiddle.style.cssText = `
            animation-name: animationBurgerTopLineOpen;
            animation-delay: 0.1s;
            animation-duration: 0.1s;
            animation-fill-mode: forwards;
        `
        burgerLineBottom.style.cssText = `
            animation-name: animationBurgerBottomLineOpen;
            animation-delay: 0.1s;
            animation-duration: 0.1s;
            animation-fill-mode: forwards;
        `
        burgerButton.style.cssText = `
            transition: background 0.1s, width 0.1s, height 0.1s;
            background: black;
            position: relative;
            height: 20px;
        `
        inputSearch.style.setProperty('width', '100%', 'important')
        searchBlock.style.cssText = `
            width: 100%;
            transition: 0.5s;
        `
        formBlock.style.setProperty('border-bottom', '1px solid black', 'important')
        logotypeBlock.style.cssText = `
            opacity: 0;
            transition: opacity 0.5s;
        `
        userToolsTopBlock.style.cssText = `
            opacity: 0;
            transition: opacity 0.5s;
        `
        setTimeout (() => {
            logotypeBlock.style.display = 'none'
            userToolsTopBlock.style.display = 'none'
        }, 500)
        animationComplete = true
    } else {
        headerBottomContainer.style.width = '0%'
        burgerLineTop.style.cssText = `
            animation-name: animationBurgerTopLineClose;
            animation-delay: 0.1s;
            animation-duration: 0.2s;
            animation-fill-mode: forwards;
        `
        burgerLineMiddle.style.cssText = `
            animation-name: animationBurgerTopLineClose;
            animation-delay: 0.1s;
            animation-duration: 0.2s;
            animation-fill-mode: forwards;
        `
        burgerLineBottom.style.cssText = `
            animation-name: animationBurgerBottomLineClose;
            animation-delay: 0.1s;
            animation-duration: 0.2s;
            animation-fill-mode: forwards;
        `
        burgerButton.style.cssText = `
            background: white;
            height: 12px;
            transition: background 0.1s, width 0.1s, height 0.1s;
        `
        inputSearch.style.setProperty('width', '0%', 'important')
        searchBlock.style.cssText = `
            width: 0%;
            transition: 0.5s;
        `
        logotypeBlock.style.cssText = `
            opacity: 1;
            transition: opacity 0.5s;
        `
        userToolsTopBlock.style.cssText = `
            opacity: 1;
            transition: opacity 0.5s;
        `
        setTimeout (() => {
            logotypeBlock.style.display = 'block'
            userToolsTopBlock.style.display = 'flex'
        }, 500)
        animationComplete = false
    }
})