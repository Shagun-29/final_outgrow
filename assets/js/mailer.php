<?php

$name = $_POST['name'];
$email = $_POST['email'];

require __DIR__."/../vendor/phpmailer/phpmailer/PHPMailerAutoload.php";

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'outgrowbiz@gmail.com';                 // SMTP username
$mail->Password = 'pratham123';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('outgrowbiz@gmail.com', 'Outgrow Notifications');
$mail->addAddress("randy@outgrow.co", "Randy");     // Add a recipient

$mail->Subject = 'New Lead received';
$mail->Body    = "Hi,\n\nYou have got a new lead.\n\nName : {$name} \nEmail : {$email}";

if(!$mail->send()) {
    return [
      'status' => 0,
      'message' => 'Not sent'
    ];
} else {
    return [
      'status' => 1,
      'message' => 'Sent'
    ];
}