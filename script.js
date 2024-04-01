// Active menu
let burger = document.querySelector('.header__burger')
let nav = document.querySelector('.nav__list')

burger.addEventListener('click', function () {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
})

// Modal
let openModal = document.querySelectorAll('.open-modal')
let closeModal = document.querySelector('.modal__btn')
let modal = document.querySelector('.modal-wrap')

openModal.forEach(item => {
	item.addEventListener('click', function () {
		modal.classList.add('open')
		closeModal.onclick = function () {
			modal.classList.remove('open')
		}
	})
})
window.addEventListener('click', function (e) {
	if (e.target === modal) {
		modal.classList.remove('open')
	}
})

window.addEventListener('click', function (e) {
		let hasClass = e.target.classList.contains('active')
	if (hasClass) {
		nav.classList.add('active')
		burger.classList.add('active')
	} else {
			nav.classList.remove('active')
			burger.classList.remove('active')
	}
	})

document.addEventListener('DOMContentLoaded', () => {
	const headerWrap = document.querySelector('.header-wrap')
	const header = document.querySelector('.header')
	const scrollItems = document.querySelectorAll('.scroll-item')

	const scrollAnimation = () => {
		let windowCenter = window.innerHeight + window.scrollY
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + el.offsetHeight / 2
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class')
			}
		})
	}
	scrollAnimation()
	window.addEventListener('scroll', () => {
		let scroll = document.querySelector('.up')
		scrollAnimation()
		scroll.classList.toggle('visible', window.scrollY >= 1000)
		document.querySelector('.up').onclick = function () {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	})
})
