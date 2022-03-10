<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
//Request
use App\Http\Requests\BookRequest;
//interface
use App\Interfaces\BookRepositoryInterface;
//models
use App\Models\Book;


class BooksController extends Controller
{

    private BookRepositoryInterface $bookRepository;
    public function __construct(BookRepositoryInterface $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    //getAllBooks
    public function getBooks(){
        return response()->json(['data' => $this->bookRepository->getAllBook()]);
      } //end getBooks()

    //add book
    public function addBook(BookRequest $request){
        $bookDetails = $request->only([
              'title',
              'isbn',
          ]);
            $book = $this->bookRepository->addBook($bookDetails);
            return response()->json(['message' => 'Book add successfully',
                  'data' => $book],200);
      } //end addBook()
}
