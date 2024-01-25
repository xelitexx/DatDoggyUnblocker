<?php
// Start a session
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the entered code matches the desired access code
    $accessCode = "1234";
    if ($_POST["code"] === $accessCode) {
        // Store a flag in the session to indicate successful login
        $_SESSION["loggedin"] = true;
        
        // Redirect to the protected page
        header("location: protected_page.php");
        exit;
    } else {
        // Display an error message if the code is incorrect
        $error = "Invalid access code!";
    }
}
?>
