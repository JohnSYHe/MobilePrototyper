<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css">
        <link href="css/IntroPage_Stylesheet.css" rel="stylesheet" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        
        <script type="text/javascript" src="js/xhr.js"></script>
        <script type="text/javascript" src="js/javascript.js"></script>
        <title>Title</title>
    </head>
    <body>

        <!--This creates the container that holds all the elements. Adjustable in .CSS-->
        <div class="container">

            <!--Makes the list for the tabs. This is the place to add more.-->
            <ul class="nav nav-tabs nav-justified">
                <li class="active"><a data-toggle="tab" href="#login">Log-In</a></li>
                <li><a data-toggle="tab" href="#register">Register</a></li>
            </ul>

            <!--This controls the content for the tabs.-->
            <div class="tab-content">
                <!--The initial active pane, the log-in pane.-->
                <div id="login" class="tab-pane fade in active">
                    <!--This implements the logo onto the website and makes it that the logo is a link-->
                    <a href="https://www.exium.co.nz/"><img src="Exium Logo.png" alt="logo"></a>
                    <!--The form for the login that requires user input to complete.-->
                    <form role="form">
                        <!--Makes the box for username/email and spaces it neatly-->
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Username/Email "  name="username">
                        </div>
                        <!--Makes the box for the password and spaces it neatly-->
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" name="password">
                        </div>
                        <!--Makes the button to log in once the user inputs their details-->
                        <div class="form-group">
                            <input type="button" class="btn btn-default btn-block" value="Login" onClick="getData('php/login.php', 'testfile', username.value, password.value)">
                        </div>
                    </form>
                    <!--Makes a button group for the 2 links if they user needs it-->
                    <div class="btn-group btn-group-justified">
                        <a href="" class="btn btn-info">Register Here</a>
                        <a href="#" class="btn btn-info">Forgot password?</a>
                    </div>
                </div>
                <!--Second pane for the register tab.-->
                <div id="register" class="tab-pane fade">
                    <!--The form for the register pane that requires the user input to complete.-->
                    <form role="form">
                        <h4>Please fill in your details</h4>
                        <!--Section for the username.-->
                        <div class="form-group">
                            <label>Username</label>
                            <input type="username" class="form-control" placeholder="Username" name="register_username">
                        </div>
                        <!--Section for the email.-->
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" class="form-control" placeholder="ABC123@email.com"  name="email">
                        </div>
                        <!--Section for the contact number-->
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="contact" class="form-control"  name="phone_num">
                        </div>
                        <!--Section for the alternative contact number (optional).-->
                        <div class="form-group">
                            <label>Alt. Contact (Optional)</label>
                            <input type="altContact" class="form-control" name="alt_contact" >
                        </div>
                        <!--Section for the password.-->
                        <label>Password</label>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" name="password1" id ="password1" required>
                        </div>
                        <!--Section for the password confirmation.-->
                        <label>Confirm Password</label>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Confirm Password" name="password2" id="password2" required>
                        </div>
                        <!--Makes the button to log in once the user inputs their details-->
                        <div class="form-group">
                            <input type="button" class="btn btn-default btn-block" value="Register" onClick="get_register_data('php/register.php', 'testfile',register_username.value,email.value,phone_num.value,alt_contact.value, password1.value,password2.value)">
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <div id ='testfile' >
            <?php
            $_SESSION["current_url"] = basename($_SERVER['PHP_SELF']);
            
            if (!empty($_SESSION["accountid"]) && isset($_SESSION["accountid"])) {
                $accountid = $_SESSION["accountid"];
                echo "Welcome $accountid !   ";
                echo "<a href='php/function.php?logout=true'>Log out</a>";  
            }
            ?>
        </div>
    </body>
</html>