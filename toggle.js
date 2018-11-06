$(function(){
	$( ".a" ).click(function() {
		var data = $(this).attr('data-id');
		$( "#b"+data ).toggle( "slow", function() {
		    console.log('OK'); 
		});
	});
})
