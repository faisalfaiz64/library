<?php

namespace App\Interfaces;

interface BookRepositoryInterface
{
    public function getAllBook();
    public function addBook(array $bookDetails);
}
