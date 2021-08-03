let button_scrollTop = document.getElementById('button_scrollTop')

button_scrollTop.addEventListener('click', function scroll () {
    window.scrollBy(0, -200)
    if (window.pageYOffset > 0) {
        requestAnimationFrame(scroll)
    }
})