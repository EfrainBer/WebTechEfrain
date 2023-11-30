<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/Portatiles', 'index');
    Route::post('/Portatil', 'store');
    Route::get('/Portatil/{id}', 'show');
    Route::put('/Portatil/{id}', 'update');
    Route::delete('/Portatil/{id}', 'destroy');
});