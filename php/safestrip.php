<?php
//function safestrip
function safestrip($string) {
    $string = trim($string);
    $string = strip_tags($string);
//    $string = mysqli_real_escape_string($conn,$string);
//    $string= mysqli_real_escape_string($conn,$string);
    $string = str_replace("_","",$string);
    return $string;
}
?>




