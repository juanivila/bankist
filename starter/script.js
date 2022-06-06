// "use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
const allButtons = document.getElementsByTagName("button");

//-------------------------------------------------- Dom Intro --------------------------------------------------

// // Adding message
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = 'We use cookies for improved functionality and analytics'
// message.innerHTML = "We use cookies for improved functionality and analytics <button class='btn btn--close-cookie'>Got it!</button>";

// header.prepend(message)

// // Delete elements
// const cookieBtn = document.querySelector('.btn--close-cookie')
// cookieBtn.addEventListener('click', (e) => {
// message.remove()

// })

// // Styles
// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// // Attributes
// console.log(logo.alt);
// console.log(logo.src);

// logo.alt = "Beautiful minimalist logo";

//-------------------------------------------------- Scrolling --------------------------------------------------

// const btnScrollTo = document.querySelector('.btn--scroll-to')
// const section1 = document.querySelector('#section--1')

// btnScrollTo.addEventListener('click', (e) => {
// // const s1coords = section1.getBoundingClientRect()
// // console.log(s1coords);
// // console.log(e.target.getBoundingClientRect(e));

// section1.scrollIntoView({ behavior: "smooth" });
// })

// const h1 = document.querySelector('h1')

// h1.addEventListener('mouseenter', (e) => {
// alert("AddEvent Great! Reading heading")

// })

//-------------------------------------------------- Page Navigation --------------------------------------------------
// document.querySelectorAll(".nav__link").forEach(function (el) {
// 	el.addEventListener("click", function(e) {
// 		e.preventDefault();
// 		const id = this.getAttribute("href");
// 		console.log(id);
// 		document.querySelector(id).scrollIntoView({behavior:'smooth'})
// 	});
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
	console.log(e.target);

	//	Matching strategy
	if (e.target.classList.contains("nav__link")) {
		const id = e.target.getAttribute("href");
		console.log(id);
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	}
});

//-------------------------------------------------- Bubbling --------------------------------------------------
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function(e) {
// 	this.style.backgroundColor = randomColor();
// 	console.log('Nav link');
// 	console.log(e.target);

// 	e.stopPropagation()
// });

// document.querySelector(".nav__links").addEventListener("click", function(e) {
// 	this.style.backgroundColor = randomColor();
// 	console.log('nav links');
// 	console.log(e.target);
// });
// document.querySelector(".nav").addEventListener("click", function(e) {
// 	this.style.backgroundColor = randomColor();
// 	console.log('nav container');
// 	console.log(e.target);
// });

// Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", e => {
	const clicked = e.target.closest(".operations__tab");

	if (!clicked) return;

	// Changing buttons
	tabs.forEach(tab => tab.classList.remove("operations__tab--active"));
	clicked.classList.add("operations__tab--active");

	// Active content area
	tabsContent.forEach(tab => tab.classList.remove("operations__content--active"));
});
