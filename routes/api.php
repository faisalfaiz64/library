<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\Main;
// use App\Http\Controllers\Api\Admin\v1\AuthController;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1', 'namespace' => 'V1'], function () {
    Route::get('check', 'AuthController@check');
    Route::post('/login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('/user', 'AuthController@me');

    Route::post('/import/maindata',[Main::class, 'DataImport']);
    Route::post('/import/saleproducts',[Main::class, 'SaleProductsImport']);
    Route::post('/import/targets',[Main::class, 'TargetsImport']);
    Route::post('/import/actuals',[Main::class, 'ActualsImport']);
    Route::post('/stats/vansalesman/{id}',[Main::class, 'StatsVanSalesman']);
    Route::post('/stats/leaderboard',[Main::class, 'leaderboard']);

    Route::get('/stats/salesman/{id}',[Main::class, 'StatsVanSalesman']);


    Route::post('UploadingProducts',[Main::class, 'UploadingProducts']);
    Route::post('importTargetFile',[Main::class, 'ImportTargets']);
    Route::get('rank',[Main::class, 'rank']);
    Route::get('exportData',[Main::class, 'exportData']);
    Route::get('gift',[Main::class, 'gift']);
    Route::get('new-and-comunication',[Main::class, 'new_and_comunication']);
    Route::post('upload-new-comunication',[Main::class, 'upload_new_comunication']);
    Route::get('showNews',[Main::class, 'showNewsAndComunication']);
    Route::get('allProductTarget',[Main::class, 'allProductTarget']);
    Route::get('statistics/{id}',[Main::class, 'statistics']);
    Route::get('StatsProduct',[Main::class, 'StatsProduct']);
    Route::get('totalTargets',[Main::class, 'totalTargets']);
    Route::get('totalActuals',[Main::class, 'totalActuals']);

});
