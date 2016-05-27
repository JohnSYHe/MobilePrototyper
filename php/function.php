<?php
include '../config/sqlaccess.inc.php';
include '../php/safestrip.php';
//acccount logout
function account_logout() {
    session_start(); // start the session
    session_unset(); // unset all session variables
    session_destroy(); // destroy all data associated with the session
    $Get_url = basename($_SERVER['PHP_SELF']);
    header("location:../index.php");
}
if (isset($_GET['logout'])) {
    account_logout();
}

?>