<?php


namespace App\Services\Telegram;


use App\Services\Telegram\Exceptions\TelegramBotApiException;
use Illuminate\Support\Facades\Http;

class TelegramBotApi
{
    public const HOST = 'https://api.telegram.org/bot';

    public static function sendMessage(string $token, int $chatId, string $text): bool
    {
        try {
            Http::get(self::HOST . $token . '/sendMessage', [
                'chat_id' => $chatId,
                'text' => $text
            ]);
        } catch (\Throwable $e) {
            report(new TelegramBotApiException($e->getMessage()));
            return false;
        }

        return true;

    }
}
