<?php


namespace App\Support\Flash;


use Illuminate\Contracts\Session\Session;

final class FlashMessage
{
    public function __construct(protected string $message, protected string $class)
    {

    }

    public function message(): string
    {
        return $this->message;
    }

    public function class(): string
    {
        return $this->class;
    }
}
