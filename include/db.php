<?php
$db=mysqli_connect("localhost","root","");

if ($db->select_db('iportfolio') === false) {
    $sql = "CREATE DATABASE iportfolio";
    if ($db->query($sql) === TRUE) {
        // echo "Database created successfully";

        $query = '';
        $sqlScript = file('C:\xampp\htdocs\Portfolio\include\sql.sql');
        
        foreach ($sqlScript as $line)	{
        
            $startWith = substr(trim($line), 0 ,2);
            $endWith = substr(trim($line), -1 ,1);
            
            if (empty($line) || $startWith == '--' || $startWith == '/*' || $startWith == '//') {
                continue;
            }
                
            $query = $query . $line;
            if ($endWith == ';') {
                mysqli_query($db,$query) or die('<div class="error-response sql-import-response">Problem in executing the SQL query <b>' . $query. '</b></div>');
                $query= '';		
            }
        }
    }
}

$query = "SELECT * FROM basic_setup,personal_setup,aboutus_setup";
$runquery = mysqli_query($db,$query);
if(!$db){
    // header("location:index-2.html");
}  else {
    // echo "Error creating database: " . $conn->error;
}
$data = mysqli_fetch_array($runquery);