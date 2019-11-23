$(document).ready(function(){
	let isActive = true;
	let button_1 = $(".button-1")
	let text_1 = $(".text-1");
	button_1.click(() => {
		if (!isActive) {
			text_1.show();
			button_1.text('hide text')
		} else {
			text_1.hide();
			button_1.text('show text')
		}
		isActive = !isActive
	});
	let element = ('<div class="element">added</div>')
	$(".button-2").click(() => {
		$('.row-1').prepend(element)
	})
	$(".button-3").click(() => {
		$('.row-1').append(element)
	})
	$(".element").click(function (){
		$(this).addClass('element__red')
		setTimeout(() =>{
			$(this).remove()
		}, 500)
	})
	$('#slide_top').click(()=>{
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})
	$('#input').change(function () {
		$('#input_text').text($(this).val())
	})
	let isAnimated = true
	$('.button-4').on('click', () => {
		if ( isAnimated ) {
			$( "#effect" ).animate({
				backgroundColor: "#aa0000",
				color: "#fff",
				width: 500
			}, 1000 );
		} else {
			$( "#effect" ).animate({
				backgroundColor: "#fff",
				color: "#000",
				width: 240
			}, 1000 );
		}
		isAnimated = !isAnimated
	})
	
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
				" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
});
