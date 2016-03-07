<?php
/* 
ieuan morris ID 1390482

 */

	require_once("db_settings.php");
	
	//creating the connection.
	$con = mysqli_connect ($hostname,$username,$password,$database);

	if ($con)
{
	//checks to see if the DB exists, if it doesnt one is created.
	if (mysqli_num_rows( mysqli_query($con,"SHOW TABLES LIKE 'loginandregister';") ) == 0)
	{
		mysqli_query($con,
			"CREATE TABLE IF NOT EXISTS `loginandregister` (
			  `id` int(11) NOT NULL, 
			  `userName` varchar(50) NOT NULL,
			  `email` varchar(50) NOT NULL,
			  `phoneNumber` int(50)  NULL,
			  `altContact` int(50)  NULL,
			  `password` varchar(50) NOT NULL,
			  `confirmPassward` varchar (50) NOT NULL,
			  
			  PRIMARY KEY (`id`)
			)"
		);
	} 

	if(isset($_POST['id']) 
	&& isset($_POST['userName']) 
	&& isset($_POST['email']) 
	&& isset($_POST['ph']) 
	&& isset($_POST['alt']) 
	&& isset($_POST['pass']) 
	&& isset($_POST['confirm']) 
	
	{
		$id = $_POST['id'];
		$userName = $_POST['userName'];
		$email = $_POST['email'];
		$phoneNumber = $_POST['ph'];
		$altContact = $_POST['alt'];
		$password = $_POST['pass'];
		$confirmPassward = $_POST['confirm'];

	

	//inserting query.

	$query = "INSERT INTO loginandregister 
	(userName, email, phoneNumber, altContact, password, confirmPassward)
	VALUES 
	('$username', '$email', '$phoneNumber', '$altContact', '$password', '$confirmPassward')";
	
if (mysqli_query($con,$query)) 
		{
			//adding to database was successfull
			echo "Thank you for registering your account."
		}
		else
		{
			//adding to the database came accross an error
			echo "something went wrong with your registration, please try again";
		}
											  
	}
	//POST variables not assigned properly
	else {	echo "error fetching data";	}
}
//database connection error
else { echo "Failed to connect to MySQL: " . mysqli_connect_error(); 
}



?>
