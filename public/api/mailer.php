<?php
declare(strict_types=1);

function ne_env(string $key, string $default = ''): string
{
    if (isset($_ENV[$key]) && $_ENV[$key] !== '') {
        return (string) $_ENV[$key];
    }
    $fromEnv = getenv($key);
    if ($fromEnv !== false && $fromEnv !== '') {
        return (string) $fromEnv;
    }
    return $default;
}

function ne_find_autoload(): ?string
{
    $candidates = array(
        __DIR__ . '/vendor/autoload.php',
        __DIR__ . '/../vendor/autoload.php',
        dirname(__DIR__) . '/vendor/autoload.php',
        dirname(dirname(__DIR__)) . '/vendor/autoload.php',
    );
    foreach ($candidates as $path) {
        if (is_file($path)) {
            return $path;
        }
    }
    return null;
}

/**
 * Send HTML mail via SMTP (when configured) or PHP mail().
 */
function ne_deliver_mail(
    string $toEmail,
    string $toName,
    string $subject,
    string $html,
    string $alt,
    string $replyEmail = '',
    string $replyName = ''
): bool {
    $smtpHost = ne_env('SMTP_HOST');
    $smtpUser = ne_env('SMTP_USER');
    $smtpPass = ne_env('SMTP_PASS');
    $smtpPort = (int) ne_env('SMTP_PORT', '465');
    $smtpSecure = ne_env('SMTP_SECURE', 'smtps');
    $fromEmail = ne_env('MAIL_FROM', ne_env('ORDER_NOTIFY_EMAIL', 'info@nexeco-ai.com'));
    if ($smtpUser !== '') {
        $fromEmail = $smtpUser;
    }
    $fromName = ne_env('MAIL_FROM_NAME', 'NexEco AI');

    $autoload = ne_find_autoload();
    if ($autoload && $smtpHost !== '' && $smtpUser !== '' && $smtpPass !== '') {
        try {
            require_once $autoload;
            if (class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
                $mail = new PHPMailer\PHPMailer\PHPMailer(true);
                $mail->Timeout = 15;
                $mail->isSMTP();
                $mail->Host = $smtpHost;
                $mail->SMTPAuth = true;
                $mail->Username = $smtpUser;
                $mail->Password = $smtpPass;
                $mail->Port = $smtpPort > 0 ? $smtpPort : 465;
                if ($smtpSecure === 'smtps' || $smtpPort === 465) {
                    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
                } else {
                    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
                }
                $mail->CharSet = 'UTF-8';
                $mail->setFrom($fromEmail, $fromName);
                $mail->addAddress($toEmail, $toName);
                if ($replyEmail !== '') {
                    $mail->addReplyTo($replyEmail, $replyName !== '' ? $replyName : $replyEmail);
                }
                $mail->isHTML(true);
                $mail->Subject = $subject;
                $mail->Body = $html;
                $mail->AltBody = $alt !== '' ? $alt : strip_tags($subject);
                $mail->send();
                return true;
            }
        } catch (Throwable $e) {
            // Fall through to mail()
        }
    }

    $headers = array(
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . $fromName . ' <' . $fromEmail . '>',
    );
    if ($replyEmail !== '') {
        $headers[] = 'Reply-To: ' . ($replyName !== '' ? $replyName : $replyEmail) . ' <' . $replyEmail . '>';
    }
    $headers[] = 'X-Mailer: PHP/' . phpversion();

    if (!function_exists('mail')) {
        return false;
    }

    return @mail(
        $toEmail,
        '=?UTF-8?B?' . base64_encode($subject) . '?=',
        $html,
        implode("\r\n", $headers),
        '-f' . $fromEmail
    );
}

if (!function_exists('deliverMail')) {
    function deliverMail(
        $toEmail,
        $toName,
        $subject,
        $html,
        $alt,
        $replyEmail = '',
        $replyName = ''
    ) {
        return ne_deliver_mail(
            (string) $toEmail,
            (string) $toName,
            (string) $subject,
            (string) $html,
            (string) $alt,
            (string) $replyEmail,
            (string) $replyName
        );
    }
}

if (!function_exists('findAutoload')) {
    function findAutoload()
    {
        return ne_find_autoload();
    }
}
