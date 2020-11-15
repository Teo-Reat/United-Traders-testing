const button = document.getElementById('nav-icon1');
const menu = document.getElementById('nav-menu');
button.onclick = (() => {
	button.classList.toggle('open');
	menu.classList.toggle('top-menu__inner--close')
})
