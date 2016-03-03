<?php
/* 
ieuan morris ID 1390482

 */

	require_once("db_settings.php");
	
	$username = $_POST['username'];
	$email = $_POST['email'];
	$phoneNumber = $_POST['phoneNumber'];
	$altContact = $_POST['altContact'];
	$password = $_POST['password'];
	$confirmPassward = $_POST['confirmPassward'];

	//creating the connection.
	$conn = new mysqli ($hostname, $username, $password, $database);

	//check connection
	if ($conn->connect_error) {
		die("connection failed:" . $conn->connect_error);
	}

	if(empty($username)) {
		echo "User Name cannot be left blank";
		die();
	}

	if(empty($email)) {
		echo"please fill in your email address";
	}

	if(empty($phoneNumber)) {
		echo"please enter a phone number";
	}
	
	if(empty($altContact)){
		echo"please enter an alternate contact.";
		die();
	}

	if(empty($password)) {
		echo"please enter a password";
	}

	if(empty($confirmPassward)) {
		echo"please re enter your password";
	}


	//inserting query.

	$sql = "INSERT INTO loginandregister (userName, email, phoneNumber, altContact, password, confirmPassward)
	VALUES ('$username', '$email', '$phoneNumber', '$altContact', '$password', '$confirmPassward')";

	if($conn->query($sql)== TRUE) {
		echo "Thank You for registering with us";
	}else{
		echo"ERROR " . $sql . "<br>" . $conn->error;
	}

	$conn->close();

?>
