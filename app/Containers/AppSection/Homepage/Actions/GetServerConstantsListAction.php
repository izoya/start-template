<?php

namespace App\Containers\AppSection\Homepage\Actions;

use App\Containers\AppSection\Homepage\Tasks\GetContainersConstantsTask;
use App\Ship\Parents\Actions\Action;

class GetServerConstantsListAction extends Action
{
    public function run(): array
    {
        $containersConstants = app(GetContainersConstantsTask::class)->run();

        $otherConstants = [];

        return $containersConstants + $otherConstants;
    }
}
