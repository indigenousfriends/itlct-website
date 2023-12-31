<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $name = $firstName . " " . $lastName;
    $email = $_POST['email'];
    $destination = $_POST['destination'];
    $message = $_POST['description'];

    $info = 'info@iftheselandscouldtalk.org';
    $events = 'events@iftheselandscouldtalk.org';

    $from = "info+websiteform@iftheselandscouldtalk.org";
    $to = $info;
    $cc = "";

    $successURL = $_SERVER['HTTP_REFERER'] . '?success=true#contact-us-form';

    if ($destination == 'events') {
        $to = $events;
        $cc = $info;
        $regarding = 'events';
    } elseif ($destination == 'join') {
        $regarding = 'joining the team';
    } else {
        $regarding = 'general';
    }

    $subject = "New $regarding message from the ITLCT website form";
    $headers = "From: ITLCT website form <$from>" . "\r\n" .
        "Reply-To: $name <$email>" . "\r\n" .
        "CC: $cc" . "\r\n" .
        "MIME-Version: 1.0\r\n" .
        "Content-type: text/html; charset=iso-8859-1\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $body = "You have received a new message from the contact form on the If These Lands Could Talk website regarding $regarding.\n\n" . "Here are the details:\n\nName: $name\n\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        header('Location: ' . $successURL);
        exit;
    } else {
        echo 'Message sending failed';
    }
}
