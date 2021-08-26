<?php

use PHPMailer\PHPMailer\PHPMailer;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if (isset($_POST["name"]) && isset($_POST["email"])) {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $body = $_POST["body"];

  require_once "PHPMailer/PHPMailer.php";
  require_once "PHPMailer/SMTP.php";
  require_once "PHPMailer/Exception.php";

  $mail = new PHPMailer();

  //smtp settings 
  $mail->isSMTP();
  $mail->Host = "smtp.gmail.com";
  $mail->SMTPAuth = true;
  $mail->Username = "muhammad.shahroze91@gmail.com";
  $mail->Password = "q8c3zQ@8Ti5c@v";
  $mail->Port = 465;
  $mail->SMTPSecure = "ssl";

  // // $mail->isSMTP();
  // // $mail->Host = "smtp.office365.com";
  // // $mail->SMTPAuth = true;
  // // $mail->Username = "muhammad.shahroze@outlook.com";
  // // $mail->Password = "";
  // // $mail->Port = 587;
  // // $mail->SMTPSecure = "STARTTLS";

  // email settings 
  $mail->isHTML(true);
  $mail->setFrom($email, $name);
  $mail->addAddress("muhammad.shahroze@outlook.com");
  $mail->Subject = ("$email ($subject)");
  $mail->Body = $body;
  // // $mail->addCC('cc@example.com');
  // $mail->addBCC("resinote@gmail.com");


  if ($mail->send()) {
    $status = "success";
    $response = "Email is sent!";
  } else {
    $status = "failed";
    $response = "Something is wrong: <br>" . $mail->ErrorInfo;
  }
  exit(json_encode(array("status" => $status, "response" => $response)));
}
