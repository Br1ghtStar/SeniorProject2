<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $rating = $_POST['rating'];
    $feedback = $_POST['feedback'];

    //Database connection
    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(firstName,lastName,email,rating,feedback)
        values(?,?,?,?,?)");
        $stmt->bind_param("sssis",$firstName,$lastName,$email,$rating,$feedback);
        $stmt->execute();
        echo "Review successfully submittted";
        $stmt->close();
        $conn->close();
    }
