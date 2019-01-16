var menuBtn = document.querySelector('#toggle-btn');
var navContainer = document.querySelector('#nav-container');
var signupBtnContainer = document.querySelector('#signup-btn-container');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    navContainer.classList.toggle('open');
    signupBtnContainer.classList.toggle('open');
});
