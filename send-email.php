<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vormiväljad
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $address = htmlspecialchars($_POST["address"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $productType = htmlspecialchars($_POST["product-type"]);
    $brand = htmlspecialchars($_POST["brand"]);
    $model = htmlspecialchars($_POST["model"]);
    $pnc = htmlspecialchars($_POST["pnc"]);
    $description = htmlspecialchars($_POST["description"]);

    // E-maili sisu
    $message = "Nimi: $name\nEmail: $email\nAadress: $address\nTelefon: $phone\n";
    $message .= "Toote tüüp: $productType\nBränd: $brand\nMudel: $model\n";
    $message .= "PNC/E-number: $pnc\n\nVeakirjeldus:\n$description\n";

    // E-maili andmed
    $to = "marcserv.hooldus@gmail.com";
    $subject = "Uus kontaktivormi sõnum veebilehelt";

    // Piir (boundary) manuse jaoks
    $boundary = md5(time());

    // Pealkirjad
    $headers = "From: noreply@marcserv.ee\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

    // E-maili keha (tekstiosad)
    $body = "--{$boundary}\r\n";
    $body .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $message . "\r\n";

    // Kui fail on olemas ja üles laetud
    if (isset($_FILES['pncImage']) && $_FILES['pncImage']['error'] == UPLOAD_ERR_OK) {
        $file_tmp = $_FILES['pncImage']['tmp_name'];
        $file_name = $_FILES['pncImage']['name'];
        $file_type = $_FILES['pncImage']['type'];
        $file_data = file_get_contents($file_tmp);
        $file_encoded = chunk_split(base64_encode($file_data));

        $body .= "--{$boundary}\r\n";
        $body .= "Content-Type: {$file_type}; name=\"{$file_name}\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"{$file_name}\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $file_encoded . "\r\n";
    }

    // Lõpp
    $body .= "--{$boundary}--";

    // Saada e-kiri
    if (mail($to, $subject, $body, $headers)) {
        echo "Sõnum saadetud!";
    } else {
        echo "Viga sõnumi saatmisel.";
    }
}
?>
