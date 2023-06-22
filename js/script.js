'use strict';

const navButton = document.querySelector('.nav-icon-btn'),
	navIcon = document.querySelector('.nav-icon'),
	nav = document.querySelector('.header__top-row');

navButton.onclick = () => {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__top-row--mobile');
	document.body.classList.toggle('no-scroll');
};
