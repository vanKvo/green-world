/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	x.className += " responsive";
	} else {
	x.className = "topnav";
	}
}
/*Donation Form*/
function openForm() {
 document.getElementById("donate-form").style.display = "block";
}
$(document).ready(function(){
	//Any of donate buttons and DONATE button is clicked, show the donating form
	$('#donate-buttons').on('click', '.btn-green', function() {
			$('#donate-btn').show();
			$('.active').removeClass('active');
			$(this).filter('.btn-green').addClass('active');
			$('#amount').append($(this).val());
	});
	$('#donate-buttons').on('click', '.btn-green-other', function() {
		var input = $('#other-amount').val();
		if (input === "") {
			$('#donate-buttons').append('<p  style="color:red;">**Please enter an amount</p>');
			console.log('No amount entered');
		} else {
			$('#donate-btn').show();
			 $('#amount').append(input);
		}	
	});
	//Show other input field when OTHER AMOUNT button is clicked	
	$('#other-btn').click(function() {
		$('#other-input').show();
	});
	//Validate form
	$('#submit-btn').on('click', function(e) {
		e.preventDefault();//prevent the page from moving to the top of the webpage
		//There are still fields missing
		$('.form-control').each(function(){//function(index, obj)
			if ($(this).attr("value")==='') {
				$('#form-alert').show();
			} 
		});
		//No fields are missing, display thank-you card
		if ($('#name').val()!== '' && $('#email').val()!== '' && $('#address').val()!== '' && $('#city-state-zip').val()!=='' && $('#credit-number').val()!== '' && $('#exp').val()!=='' && $('#cvv').val()!== ''&& $('#zip').val()!== '') {
			$('#form-alert').hide();
			$('#thank-you-card').show();	
		}
	});
});
/*End Donation Form*/