<?php

if(isset($_POST['submit'])) {
    // variables
    $fullName = $_POST['fullName'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $errors = array();
    $success = FALSE;

    $mailTo = 'nsims@ggc.edu';
    $headers = "From: ".$mailFrom;
    $txt = "You have a message from ".$fullName.".\n\n".$message;

    if(isset($mailFrom) && !empty($mailFrom)){
        if(filter_var($mailFrom, FILTER_VALIDATE_EMAIL)){
            $emailEntity = htmlentities($mailFrom);
        } else {
            $errors[] = "Please enter a valid email";
        }
    } else {
        $emailEntity = NULL;
        $errors[] = "Email is a required field";
    }

    if(isset($message) && !empty($message)) {
        if(strlen($message) < 10) {
            $errors[] = "Message needs to be longer than 10 characters";
        } else {
            $messageEntity = htmlentities($message);
        }
    } else {
        $messageEntity = NULL;
        $errors[] = "Message is a required field";
    }

    if(isset($fullName) && !empty($fullName)) {
        $nameEntity = htmlentities($fullName);
    } else {
        $nameEntity = NULL;
        $errors[] = "Full Name is a required field";
    }
    
    if(isset($subject) && !empty($subject)) {
        $subjectEntity = htmlentities($subject);
    } else {
        $subjectEntity = NULL;
        $errors[] = "Subject is a required field";
    }

    if(count($errors) != 0) {
        echo "<ul>";
        foreach($errors as $error) {
            echo "<li>".$error."</li>";
        }
        echo "</ul>";
    } else {
        echo "Message sent!";
    }

    // mail($mailTo, $subject, $txt, $headers);
    // header("Location: index.php?mailsent");

}

?>