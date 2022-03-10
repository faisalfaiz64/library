<?php

use App\Http\Controllers\Api\V1\AuthController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'v1', 'namespace' => 'V1'], function () {

  Route::get('check', 'AuthController@check');
  Route::post('/login', 'AuthController@login');
  Route::post('logout', 'AuthController@logout');
  Route::post('refresh', 'AuthController@refresh');
  Route::get('/user', 'AuthController@me');
  Route::post('/register', [AuthController::class, 'register']);


});
