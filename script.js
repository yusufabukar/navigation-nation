const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(from, to) {
	navItems.forEach((nav, i) => {
		nav.classList.replace(`slide-${from}-${i + 1}`, `slide-${to}-${i + 1}`);
	});
};

function toggleNav() {
	// Toggle Menu Bars Open/Close
	menuBars.classList.toggle('change');

	// Toggle Menu Active and Animations
	overlay.classList.toggle('overlay-active');
	if (overlay.classList.contains('overlay-active')) {
		// Animate In
		overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
		navAnimation('out', 'in');
	} else {
		// Animate Out
		overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
		navAnimation('in', 'out');
	};
};

menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => {
	nav.addEventListener('click', toggleNav);
});