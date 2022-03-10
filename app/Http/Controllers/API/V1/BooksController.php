<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
//Request
use App\Http\Requests\BookRequest;
//interface
use App\Interfaces\BookRepositoryInterface;
//models
use App\Models\Book;
use App\Models\user_action_logs;

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

    //book checkout
    public function bookCheckout(Request $request){
      $user = Auth::id();
      $book_id = $request->book_id;
      $book = Book::where('id',$book_id)->first();
      if($user){
        if($book){
          Book::where('id',$book_id)->update([
            'status' => 'CHECKEDOUT', 
          ]);
          $log = user_action_logs::create([
            'user_id' => $user,
            'book_id' => $book_id,
            'action' => 'CHECKOUT',
          ]);
        }
      }
    }// end bookCheckout()

    //book checkIn
    public function bookCheckIn(Request $request){
      $user = Auth::id();
      $book_id = $request->book_id;
      $book = Book::where('id',$book_id)->first();
      if($user){
        if($book){
          Book::where('id',$book_id)->update([
            'status' => 'AVAILABLE', 
          ]);
          $log = user_action_logs::create([
            'user_id' => $user,
            'book_id' => $book_id,
            'action' => 'CHECKIN',
          ]);
        }
      }
    }// end bookCheckIn()
}
