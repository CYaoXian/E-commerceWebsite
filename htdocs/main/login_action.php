<?php

$servername = "127.0.0.1";
$username = "root";
$password = NULL;
$dbname = "techizer";

$handler = mysqli_connect($servername, $username, $password, $dbname);

if ($_SERVER['REQUEST_METHOD']=='POST'){

    $UserN = $_POST['Username'];
    $PassW = $_POST['Password'];

    $sql="SELECT * FROM techizer WHERE Username = '$UserN' AND Password = '$PassW'";
    $result = mysqli_query($handler,$sql);
    $check = mysqli_fetch_array($result);
    
    if(isset($check)){
    echo 'success';
    header("location: Homepage.html");
    exit;

    }else{
    echo "<script>window.alert('Invalid Username or Password!'); 
    window.location.href='login.html' </script>";   
    }
}

?>