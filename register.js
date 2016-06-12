//The JS form needed for the register stage. 
//The below functions will be for validating the entered information. 



var xhr = createRequest();

//defining regex patterns 
var REGEXnumber = /^[0-9]+$/;
var REGEXtext = /^[a-zA-Z ]+$/;
var REGEXunit = /^[a-zA-Z0-9]+$/;
var REGEXdate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
var REGEXtime = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/;

//checks name contains letters only
	
	function checkuserName()
	{
		var name = document.getElementById('userName');
		var result = false;
		
		if(name.value.length > 2)
		{
			if(REGEXtext.test(name.value))
			{
				var result = true;
				document.getElementById('td1').innerHTML = "correct";
			}
			else
			{
				document.getElementById('td1').innerHTML = "contains invalid characters";
			}
		}
		else
		{
			if(name.value.length == 0)
			{document.getElementById('td1').innerHTML = "required";}
			else
			{document.getElementById('td1').innerHTML = "too short";}
		}
		
		
		return result;
	}
	
	//checks that the phone number contains no letters
	
function checkphoneNumber()
{
	var refnum = document.getElementById('ph');

	if(phone.value.length > 5)
	{
		if(REGEXnumber.test(phone.value))
		{
			var result = true;
			document.getElementById('td2').innerHTML = "correct";
		}
		else
		{
			document.getElementById('td2').innerHTML = "please use valid characters";
		}
	}
	else
	{
		if(phone.value.length == 0)
		{document.getElementById('td2').innerHTML = "required";}
		else
		{document.getElementById('td2').innerHTML = "not long enough";}
	}
		
	return result;
}

// checking that alt contact contains only the correct information. just like phoneNumber.
function checkaltContact()
{
	var refnum = document.getElementById('alt');

	if(phone.value.length > 5)
	{
		if(REGEXnumber.test(phone.value))
		{
			var result = true;
			document.getElementById('td3').innerHTML = "correct";
		}
		else
		{
			document.getElementById('td3').innerHTML = "please use valid characters";
		}
	}
	else
	{
		if(phone.value.length == 0)
		{document.getElementById('td3').innerHTML = "required";}
		else
		{document.getElementById('td3').innerHTML = "not long enough";}
	}
		
	return result;
}

//checking that the passwords are the same. 

function checkpassword()
{
    //Store the password field objects into variables ...
    var password = document.getElementById('pass');
    var confirmPassword = document.getElementById('confirm');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(password.value == confirmPassword.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}  