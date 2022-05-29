<?php declare(strict_types=1);

use App\Containers\AppSection\Homepage\UI\API\Controllers\TestController;

use Illuminate\Support\Facades\Route;

Route::get('homepage/test', [TestController::class, 'index'])
    ->name('test_endpoint')
//    ->middleware(['auth:api'])
;
