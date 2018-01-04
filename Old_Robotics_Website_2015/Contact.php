<html>
<head>
<meta charset="utf-8">
<title>Pitt RAS</title>
<meta name="description" content="Pitt's Chapter of the Robotics and Automation Society">
<link href="main.css" rel="stylesheet" media="screen">
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
        <style>
    #Contact{
        color: #CBB67C;
    }
    </style>
</head>
    <body>
        <script language="javascript" type="text/javascript" 
  src="header.html"></script>
        
        <h3>Please fill out the form below, or send an email to RoboticsClubAtPittsburgh@gmail.com</h3>
        <form action="" method="POST">
            <label>First Name:* <br/>
                <input name="firstName" type="text" maxlength="20"><br/></label>
            <label>Last Name:* <br/>
                <input name="lastName" type="text" maxlength="20"><br/></label>
            <label>Email:* <br/>
                <input name="email" type="text" maxlength="50"><br/></label>
            <label>Comments: <br/>
                <input name="comments" type="text" maxlength="250" style="width: 20%; height: 15%"><br/></label>
            <input name="submitted" type="submit" value="Submit">
        </form>
    </body>
    <footer>
     <script language="javascript" type="text/javascript" src="footer.html"></script>
    </footer>
    <?php 
if (isset($_REQUEST['submitted'])) {
// Initialize error array.
  $errors = array();
  // Check for a proper First name
  if (!empty($_REQUEST['firstName'])) {
  $firstName = $_REQUEST['firstName'];
  $pattern = "/^[a-zA-Z0-9\_]{2,20}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$firstName)){ $firstName = $_REQUEST['firstName'];}
  else{ $errors[] = 'Your Name can only contain _, 1-9, A-Z or a-z 2-20 long.';}
  } else {$errors[] = 'You forgot to enter your First Name.';}
  
  // Check for a proper Last name
  if (!empty($_REQUEST['lastName'])) {
  $lastName = $_REQUEST['lastName'];
  $pattern = "/^[a-zA-Z0-9\_]{2,20}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$lastName)){ $lastName = $_REQUEST['lastName'];}
  else{ $errors[] = 'Your Name can only contain _, 1-9, A-Z or a-z 2-20 long.';}
  } else {$errors[] = 'You forgot to enter your Last Name.';}
  }

if (isset($_REQUEST['submitted'])) {
  if (empty($errors)) { 
  $from = "From: Our Site!"; //Site name
  // Change this to your email address you want to form sent to
  $to = "bmc95@pitt.edu"; 
  $subject = "New Member" . "";
  
  $message = "Message from " . $firstName . " " . $lastName . "";
  mail($to,$subject,$message,$from);
  }
}
?>
    
    
    
    
</html>

