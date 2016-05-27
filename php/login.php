<?php

session_start();
include '../php/function.php';
$username = $_POST['account'];
$password = $_POST['pwd'];
$account = safestrip($username);
$pwd = safestrip($password);

//convert password to md5 input this function furture
//$pwd = md5($pwd);
if (!empty($account) && !empty($pwd)) {
    $sql_check_name = "SELECT * FROM tz_members WHERE usr = '$account'or email = '$account'";
// 
    $sql_check_password = "SELECT * FROM tz_members WHERE pass = '$pwd' and usr  = '$account'";
    $sql_check_email = "SELECT * FROM tz_members WHERE pass = '$pwd' and email  = '$account'";
    $result = $conn->query($sql_check_name);
    $result1 = $conn->query($sql_check_password);
    $result2 = $conn->query($sql_check_email);
    if (mysqli_num_rows($result) == 1) {
        if (mysqli_num_rows($result1) == 1) {
            $_SESSION["accountid"] = $account;
            //need to change when install in server
            echo "<meta http-equiv=\"refresh\" content=\"1; url=http://localhost/MobilePrototyper/profile.php\">";       
            exit;
//            echo "Welcome $account !   ";
//            echo "<a href='php/function.php?logout=true'>Log out</a>";
        } else if (mysqli_num_rows($result2) == 1) {
            $accountname;
            while ($row = $result2->fetch_assoc()) {
                //get usr detial when use email login
                //printf("%s (%s)\n", $row["id"], $row["usr"]);
                $accountname = $row["usr"];
            }
            $_SESSION["accountid"] = $accountname;
//            echo "Welcome $accountname !   ";
//            echo "<a href='php/function.php?logout=true'>Log out</a>";
            
             //need to change when install in server
           echo "<meta http-equiv=\"refresh\" content=\"1; url=http://localhost/MobilePrototyper/profile.php\">";
        } else {
            echo "The password is wrong.   ";
            echo "<a href=''>Retry</a>";
        }
    } else {
        echo "The account do not exists.   ";
        echo "<a href=''>Retry</a>";
    }
    $conn->close();
} else {
    echo "The account or passowrd can not be empty   ";
    echo "<a href=''>Retry</a>";
}
?>
