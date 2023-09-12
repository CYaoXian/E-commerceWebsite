<?php

$servername = "127.0.0.1"; 

$username = "root"; 

$password = NULL; 

$handler = mysqli_connect($servername, $username, $password);

if (!$handler) {
die("Connection failed: " . mysqli_connect_error());
} else {
echo "<BR> Connected successfully";
}

if (mysqli_query($handler, 'CREATE DATABASE Techizer')) {
echo "<BR> Database created successfully";
} else {
echo "<BR>Error creating database: " . mysqli_error($handler);
}

mysqli_query($handler, 'CREATE DATABASE Techizer');
?>