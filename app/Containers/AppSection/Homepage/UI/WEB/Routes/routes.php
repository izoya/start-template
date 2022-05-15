<?php declare(strict_types = 1);

use App\Containers\AppSection\Homepage\UI\WEB\Controllers\HomepageController;
use Illuminate\Support\Facades\Route;

Route
    ::get('{all}', [HomepageController::class, 'index'])
    ->where('all', '.*')
    ->middleware('web')
    ->name('home');
