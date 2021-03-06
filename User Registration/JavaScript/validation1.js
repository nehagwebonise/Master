$(document).ready(function(){
	//global variables

	var form = $("#index");
	
        var name = $("#name");
	var nameInfo = $("#nameInfo");
        
        var age = $("#age");
	var ageInfo = $("#ageInfo");	
        
        var gender = $("#gender");
	var genderInfo = $("#genderInfo");

	var address = $("#address");
	var addrInfo = $("#addrInfo");

	var pincode = $("#pincode");
	var pinInfo = $("#pinInfo");

	var email = $("#email");
	var emailInfo = $("#emailInfo");
	
        var description = $("#description");
	var descInfo = $("#descriptionInfo");
        
        //store RegExp in variable to test
        var expr;


	//On blur
	name.blur(validateName);
	age.blur(validateAge);
	gender.blur(validateGender);
	address.blur(validateAddr);
	pincode.blur(validatePin);
	email.blur(validateEmail);
	description.blur(validateDesc);

	//On key press
	name.keyup(validateName);
	age.keyup(validateAge);
	gender.keyup(validateGender);
	address.keyup(validateAddr);
	pincode.keyup(validatePin);
	email.keyup(validateEmail);
	description.keyup(validateDesc);

	//On Submitting
	form.submit(function(){
		if(validateName() & validateAge() & validateGender() & validateAddr() & validatePin() & validateEmail() & validateDesc())
			return true
		else
			return false;
	});
	
//validation functions

	function validateEmail(){

		//testing regular expression

		var a = $("#email").val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		//if it's valid email
		if(filter.test(a)){
			email.removeClass("error");
			emailInfo.text("Please give a valid E-mail!");
			emailInfo.removeClass("error");
			return true;
		}

		//if it's NOT valid

		else{
			email.addClass("error");
			emailInfo.text("Stop cowboy! Type a valid e-mail please :P");
			emailInfo.addClass("error");
			return false;
		}
	}

	function validateName(){
		//if it's NOT valid
                var a=#name.val()
                var expr=[A-z][^0-9]\s[A-z][^0-9]
		if(name.val().length < 4 && expr.test(a)){
			name.addClass("error");
			nameInfo.text("Enter a valid name!");
			nameInfo.addClass("error");
			return false;
		}

		//if it's valid

		else{
			name.removeClass("error");
			nameInfo.removeClass("error");
			return true;
		}
	}

	function validateAge(){
		var a = $("#age");

		//it's NOT valid
		if(age.val().length >2){
			age.addClass("error");
			ageInfo.text("You can't be this old!");
			ageInfo.addClass("error");
			return false;
		}

		//it's valid

		else{			
			age.removeClass("error");
			ageInfo.text("Age in numbers (eg.25)");
			ageInfo.removeClass("error");
			return true;
		}
	}

	function validateDesc(){
		//it's NOT valid
		if(description.val().length < 5){
			description.addClass("error");
                        descInfo.text("Enter a reasonable description of yourself!");
			return false;
		}
		//it's valid
		else{			
			message.removeClass("error");
			return true;
		}
	}
});
