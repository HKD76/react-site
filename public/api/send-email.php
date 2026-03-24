<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Méthode non autorisée']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?? '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['message' => 'Payload JSON invalide']);
    exit;
}

function clean_field(array $data, string $key): string
{
    $value = $data[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }
    return trim($value);
}

$nom = clean_field($data, 'nom');
$prenom = clean_field($data, 'prenom');
$email = clean_field($data, 'email');
$entreprise = clean_field($data, 'entreprise');
$num = clean_field($data, 'num');
$texte = clean_field($data, 'texte');
$type = clean_field($data, 'type');

if ($nom === '' || $prenom === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Champs obligatoires manquants']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Adresse email invalide']);
    exit;
}

$to = 'contact@realtimes.fr';
$subject = 'Nouveau message depuis le site';

$lines = [
    "Type: " . ($type !== '' ? $type : 'Contact'),
    "Nom: {$nom}",
    "Prénom: {$prenom}",
    "Email: {$email}",
    "Entreprise: {$entreprise}",
    "Téléphone: {$num}",
    "Message: {$texte}",
];

$message = implode(PHP_EOL, $lines);

$headers = [
    'From: contact@realtimes.fr',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

$ok = mail($to, $subject, $message, implode("\r\n", $headers));

if (!$ok) {
    http_response_code(500);
    echo json_encode(['message' => "Erreur lors de l'envoi de l'email"]);
    exit;
}

echo json_encode(['message' => 'Email envoyé ✅']);
