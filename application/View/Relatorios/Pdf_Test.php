<?php
// Require composer autoload
require_once '../vendor/autoload.php';
$html = '<bookmark content="Start of the Document" /><div>Section 1 text</div>';

$mpdf = new \Mpdf\Mpdf(['tempDir' => '/application/Controller/tmp']);
$mpdf->WriteHTML($html);
$mpdf->Output();
