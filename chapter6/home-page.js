const img = document.querySelector('.home-img')
const toggleBtn = document.querySelector('.nav-toggle')
const navbarToggle = document.querySelector('.navbar-toggle')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')

toggleBtn.addEventListener('click', function() {
    img.classList.toggle('hidden')
    navbarToggle.classList.toggle('show')
    main.classList.toggle('hidden')
    footer.classList.toggle('hidden')
})