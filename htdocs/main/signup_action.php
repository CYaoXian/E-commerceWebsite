<?php
    $Name = $_POST['Name'];
    $Username = $_POST['Username'];
    $Email = $_POST['Email'];
    $Phone_N = $_POST['Phone_Number'];
    $Address = $_POST['Address'];
    $Password = $_POST['Password'];
    $Confirm_P = $_POST['Confirm_Password'];

    $DATA_INPUT = $_POST;
    if ($DATA_INPUT['Password'] !== $DATA_INPUT['Confirm_Password']) {
        echo "<script>window.alert('Password and Confirm Password Does Not Match!'); 
        window.location.href='signup.html' </script>"; 
        exit;
     }

    $servername = "127.0.0.1";
    $username = "root";
    $password = NULL;
    $dbname = "techizer";
    
    $handler = mysqli_connect($servername, $username, $password, $dbname);
    
    if(!$handler){
        die("Connection failed: " . $mysqli_connect_error());
    }else{
        echo "Connected succesfully";
    }

    $sql = mysqli_query($handler,"INSERT INTO techizer (Name, Username, Email, Phone_Number, Address, Password, Confirm_Password)
    VALUES ('$Name', '$Username', '$Email', '$Phone_N', '$Address', '$Password', '$Confirm_P')");

    if($sql == TRUE){
        header("location:Login.html");
        exit;
    }
    else{
        echo "Error";
    }
?>