const divs = $('.accordion__block')
const length = divs.length
const btnShow = $('.accordion__p')

function showVisible(visible) {
	const toShow = Math.min(visible, length)
	for (let i = 0; i < length; i++) {
		divs[i].style.display = i < toShow ? 'block' : 'none'
	}
}

let visible = 5
showVisible(visible)

btnShow.on('click', function () {
	visible = Math.min(visible + 2, length)
	showVisible(visible)
})

$('.accordion__block').on('click', function () {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active')
	} else {
		$(this).addClass('active')
	}
})
