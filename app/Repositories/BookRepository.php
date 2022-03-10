<?php

namespace App\Repositories;

use App\Interfaces\BookRepositoryInterface;

use App\Models\Book;
// Addons
use Carbon\Carbon;

class BookRepository implements BookRepositoryInterface
{
    public function getAllBook()
    {
        return Book::all();
    }
    public function addBook($bookDetails)
    {   
        $book = Book::Create([
            'title' => $bookDetails['title'],
            'isbn' => $bookDetails['isbn'],
            'published_at' => Carbon::now(),
            'status' => 'AVAILABLE',
          ]);
        return $book;
    }
}
