<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Header: Origin, Content-Type"); 

$servername = "localhost";
$username = "root";// username 
$password = "";//password for the user name 
$dbname = "fut";//name of the database we are going to use 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Checks the connection if it fails 
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
}

//sql query
$sql = "select * from details LIMIT 19";
//this passes the query to the connection set 
$result = $conn->query($sql);

//check if the results are greater than 0 
//this here displays data in json form on localhost
if ($result->num_rows > 0) {
     // output data of each row
	
	$outp = array();
	$outp = $result->fetch_all(MYSQLI_ASSOC);
	//this displays the data in json
	echo json_encode($outp);
	
} else {
     echo "0 results";
}

$conn->close();
?> 

