<?php declare(strict_types=1);

namespace App\Containers\AppSection\Homepage\Tasks;

class GetContainersConstantsTask
{
    public function run(): array
    {
        $containers = collect($this->getDirList(app_path('Containers')));

        $constants = [];

        foreach ($containers as $container) {
            $path = 'Containers/' . $container;
            $sections = $this->getDirList(app_path($path));

            foreach ($sections as $section) {
                $constDir = app_path("$path/$section/Constants");

                if (!file_exists($constDir)) {
                    continue;
                }

                $files = $this->getDirList($constDir);

                foreach ($files as $file) {
                    $className = str_replace('.php', '', $file);

                    $reflectionClass = new \ReflectionClass(
                        "App\\Containers\\$container\\$section\\Constants\\$className"
                    );

                    foreach ($reflectionClass->getConstants() as $name => $value) {
                        $constants[$container][$section][$className][$name] = $value;
                    }
                }
            }
        }

        return $constants;
    }

    private function getDirList(string $path): array
    {
        return array_diff(scandir($path), ['..', '.', 'Vendor']);
    }
}
