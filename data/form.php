<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $destination = $_POST['contact-dropdown'];
    $email = $_POST['email'];
    $message = $_POST['description'];

    // $to = 'info@iftheselandscouldtalk.org';
    // $events = 'events@iftheselandscouldtalk.org';
    $test = 'max@indigenousfriends.org';
    $testEvents = 'max+events@indigenousfriends.org';
    $to = $test;

    if ($destination == 'events') {
        $to = $testEvents;
    }

    $cc = 'pam@indigenousfriends.org, solivan@indigenousfriends.org';
    $subject = 'New contact form message from the ITLCT website';
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "CC: $cc" . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    $body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $firstName\n\nEmail: $email\n\nMessage:\n$message";

    if(mail($to, $subject, $body, $headers)){
        echo 'Message sent successfully';
    } else {
        echo 'Message sending failed';
    }
}
?>