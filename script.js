let btnPrev = document.getElementById('prevBtn')
let btnNext = document.getElementById('nextBtn')
let slide1 = document.getElementById('slide-1')
let slide2 = document.getElementById('slide-2')
let slide3 = document.getElementById('slide-3')
btnPrev.addEventListener('click', function () {

    if (window.getComputedStyle(slide1).display !== 'none') {
        slide1.style.display = 'none';
        slide3.style.display = 'block'; 
    } else if (window.getComputedStyle(slide2).display !== 'none') {
        slide2.style.display = 'none';
        slide1.style.display = 'block'; 
    } else if (window.getComputedStyle(slide3).display !== 'none') {
        slide3.style.display = 'none';
        slide2.style.display = 'block'; 
    }
});
btnNext.addEventListener('click', function () {

    if (window.getComputedStyle(slide1).display !== 'none') {
        slide1.style.display = 'none';
        slide2.style.display = 'block'; 
    } else if (window.getComputedStyle(slide2).display !== 'none') {
        slide2.style.display = 'none';
        slide3.style.display = 'block'; 
    } else if (window.getComputedStyle(slide3).display !== 'none') {
        slide3.style.display = 'none';
        slide1.style.display = 'block'; 
    }
});