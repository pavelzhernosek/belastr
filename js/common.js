let nav__list = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
	nav__list.classList.toggle('active');
	navBarToggle.classList.toggle('menu-btn_active');
});