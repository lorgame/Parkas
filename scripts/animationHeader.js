let header = document.getElementById('header')
let scrollPosition = 0;
let windowWidth = window.innerWidth

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    if (windowWidth > 1200) {
        window.addEventListener('scroll', () => {
            let top = window.pageYOffset;
            if (top >= 200 && scrollPosition < top && windowWidth > 1200) {
                header.style.top = '-144px'
            } else if (scrollPosition > top && windowWidth > 1200) {
                header.style.top = '0px'
            }
            scrollPosition = top;
        })
    }
});