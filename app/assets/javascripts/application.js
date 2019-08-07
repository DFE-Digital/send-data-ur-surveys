/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
	window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function() {
	window.GOVUKFrontend.initAll()
})

function validateRadios() {
	if ($('.validate-radio').length) {
		if ($('input[type=radio]:checked').length) {
			$('button[type=submit]').prop('disabled', false)
		} else {
			$('button[type=submit]').prop('disabled', true)
		}
	}
}

validateRadios()

$('input[type=radio]').on('change', function() {
	validateRadios()
})

$('input.copyThis').on('input', function() {
	$('.pasteHere').text($(this).val())
})
