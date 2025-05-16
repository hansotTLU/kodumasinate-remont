<?php
$to = "marcserv.hooldus@gmail.com"; // Asenda vajadusel enda e-mailiga
$subject = "PHP mail() test veebilehelt";
$message = "See on testmail, saadetud otse serverist.";
$headers = "From: test@marcserv.ee";

if (mail($to, $subject, $message, $headers)) {
    echo "✅ E-kiri saadetud edukalt!";
} else {
    echo "❌ E-kirja saatmine ebaõnnestus.";
}
?>
