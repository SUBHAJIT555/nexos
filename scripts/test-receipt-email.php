<?php
/**
 * CLI: verify receipt mail can be sent (uses public/api/.env).
 * Usage: C:/xampp/php/php.exe scripts/test-receipt-email.php you@example.com
 */
declare(strict_types=1);

if (php_sapi_name() !== 'cli') {
    fwrite(STDERR, "CLI only.\n");
    exit(1);
}

$to = $argv[1] ?? '';
if ($to === '' || !filter_var($to, FILTER_VALIDATE_EMAIL)) {
    fwrite(STDERR, "Usage: php scripts/test-receipt-email.php recipient@example.com\n");
    exit(1);
}

require __DIR__ . '/../public/api/mailer.php';

$candidates = array(__DIR__ . '/../public/api/.env');
foreach ($candidates as $path) {
    if (!is_file($path)) {
        continue;
    }
    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || !str_contains($line, '=')) {
            continue;
        }
        [$key, $value] = explode('=', $line, 2);
        $key = trim($key);
        $value = trim(trim($value), "\"'");
        $_ENV[$key] = $value;
        putenv($key . '=' . $value);
    }
}

$subject = 'NexEco AI receipt mail test';
$html = '<p>If you received this, post-purchase customer emails can be delivered.</p>';
$sent = ne_deliver_mail($to, 'Test User', $subject, $html, strip_tags($html));

if ($sent) {
    echo "OK: test receipt sent to {$to}\n";
    exit(0);
}

echo "FAIL: could not send. Set SMTP_HOST, SMTP_USER, SMTP_PASS in public/api/.env\n";
exit(1);
