<?php
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

    $the_query = "CREATE TABLE Techizer (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(30) NOT NULL,
        Username VARCHAR(30) NOT NULL,
        Email VARCHAR(50) NOT NULL,
        Phone_Number INT(10) NOT NULL,
        Address VARCHAR(30) NOT NULL,
        Password VARCHAR(30) NOT NULL,
        Confirm_Password VARCHAR(30) NOT NULL)";
    
    mysqli_query($handler, $the_query);
    if ($handler->query($the_query) === TRUE) {
        echo "<BR> Table Techizer created successfully";
      } else {
        echo "<BR> Error creating table: " . $handler->error;
      }
    
    ?>