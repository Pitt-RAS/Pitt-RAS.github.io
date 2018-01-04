<?php
if (isset($_REQUEST['submitted'])) {
// Initialize error array.
  $errors = array();
  // Check for a proper First name
  if (!empty($_REQUEST['firstName'])) {
  $firstname = $_REQUEST['firstName'];
  $pattern = "/^[a-zA-Z0-9\_]{2,20}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$firstname)){ $firstname = $_REQUEST['firstName'];}
  else{ $errors[] = 'Your Name can only contain _, 1-9, A-Z or a-z 2-20 long.';}
  } else {$errors[] = 'You forgot to enter your First Name.';
      echo 'You forgot your first name';}
  
  // Check for a proper Last name
  if (!empty($_REQUEST['lastName'])) {
  $lastname = $_REQUEST['lastName'];
  $pattern = "/^[a-zA-Z0-9\_]{2,20}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$lastname)){ $lastname = $_REQUEST['lastName'];}
  else{ $errors[] = 'Your Name can only contain _, 1-9, A-Z or a-z 2-20 long.';}
  } else {$errors[] = 'You forgot to enter your Last Name.';
         echo 'You did not put a last name';}
  }

if (isset($_REQUEST['submitted'])) {
  if (empty($errors)) { 
  $from = "From: Our Site!"; //Site name
  // Change this to your email address you want to form sent to
  $to = "roboticsclubatpittsburgh@gmail.com"; 
  $subject = "New Member" . "";
  
  $message = "Message from " . $firstname . " " . $lastname . "";
  mail($to,$subject,$message,$from);
      echo 'The mail has been sent';
  }
}
?>

<?php header('Location: http://localhost/RAS/index.html');
exit
    ?>