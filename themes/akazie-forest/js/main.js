const mobileMenu = document.getElementById('mobile_menu');
const closeBtn = document.getElementById('close_menu');
console.log(mobileMenu)
const mobileBar = document.getElementById('mobile_bar');
mobileBar.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.add('show')
})
closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.remove('show')
})