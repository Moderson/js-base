function setScrollTo(value) {
	window.scrollTo(0, value)
	const windowScrollTop = window.scrollY
	console.log(windowScrollTop)
}

function setScrollToOptions(value) {
	window.scrollTo({
		top: value,
		left: 0,
		behavior: "smooth" // прокручивать страницу плавно

		// ❗️ behavior: "smooth" теперь работает нормально в браузере Safari
	})
}