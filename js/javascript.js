/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var xhr = createRequest();
function getData(dataSource, divID, aAccount, aPassword) {
    if (xhr) {
        var obj = document.getElementById(divID);
        var requestbody = "account=" + encodeURIComponent(aAccount) + "&pwd=" + encodeURIComponent(aPassword);

        xhr.open("POST", dataSource, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            // alert(xhr.readyState); // to let us see the state of the computation
            if (xhr.readyState == 4 && xhr.status == 200) {
                obj.innerHTML = xhr.responseText;
            } // end if
        } // end anonymous call-back function
        xhr.send(requestbody);

    } // end if


} // end function getData()


//getdata  from register table
function get_register_data(dataSource, divID, username, email, phone, alt_contact, password1, password2) {
   
//    if (password1 !==password2){
//        window.alert(5 + 6);
//    }
    if (xhr) {
        var obj = document.getElementById(divID);
        var requestbody = "username=" + encodeURIComponent(username) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone) + "&password1=" + encodeURIComponent(password1) + "&password2=" + encodeURIComponent(password2);
        
        

        xhr.open("POST", dataSource, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            // alert(xhr.readyState); // to let us see the state of the computation
            if (xhr.readyState == 4 && xhr.status == 200) {
                obj.innerHTML = xhr.responseText;
            } // end if
        } // end anonymous call-back function
        xhr.send(requestbody);

    } // end i
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
