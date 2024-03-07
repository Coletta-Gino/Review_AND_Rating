<?php

// Update the details below with your MySQL details
$host = "localhost";
$dbname = "submit_rating";
$user = "submit_rating";
$pass = "submit_rating";

try {
  $db_connect = new PDO("mysql:host=" . $host . ";dbname=" . $dbname, $user, $pass);
}

catch (PDOException $e) {
  // If there is an error with the connection, stop the script and display the error
  die("Failed to connect to database: " . $e->getMessage());
}