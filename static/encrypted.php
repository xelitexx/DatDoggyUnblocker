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

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <input type="password" name="code" placeholder="Access Code" required>
        <button type="submit">Login</button>
    </form>
    
    <?php if (isset($error)) { ?>
        <p><?php echo $error; ?></p>
    <?php } ?>
</body>
</html>
