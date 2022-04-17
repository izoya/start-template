<?php declare(strict_types=1);

namespace App\Containers\AppSection\Homepage\UI\WEB\Controllers;

use App\Containers\AppSection\Homepage\Actions\GetServerConstantsListAction;
use App\Ship\Parents\Controllers\WebController;
use Illuminate\Contracts\View\View;

class HomepageController extends WebController
{
    public function index(): View
    {
        $const = app(GetServerConstantsListAction::class)->run();

        return view('appSection@homepage::homepage', ['const' => $const]);
    }
}
