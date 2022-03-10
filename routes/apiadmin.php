<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\BooksController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'v1', 'namespace' => 'V1'], function () {
  //login
  Route::post('/login', [AuthController::class, 'login']);
  Route::post('/register', [AuthController::class, 'register']);
  Route::get('/user', [AuthController::class, 'me']);
  Route::post('/refresh', [AuthController::class, 'refresh']);
  Route::post('/logout', [AuthController::class, 'logout']);
  Route::get('/check', [AuthController::class, 'check']);

  //books
  Route::get('/books/list', [BooksController::class, 'getBooks']);
  Route::post('/book/create', [BooksController::class, 'addBook']);
  Route::post('/book/checkout', [BooksController::class, 'bookCheckout']);
  Route::post('/book/checkIn', [BooksController::class, 'bookCheckIn']);
});
