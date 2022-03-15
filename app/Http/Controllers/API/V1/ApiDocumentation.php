<?php

declare(strict_types=1);

namespace App\Http\Controllers;

/**
     * @OA\Info(
     *      version="1.0.0",
     *      title="Project",
     *      description="Implementation of Swagger with in Laravel",
     *      @OA\Contact(
     *          email="admin@admin.com"
     *      ),
     *      @OA\License(
     *          name="Apache 2.0",
     *          url="http://www.apache.org/licenses/LICENSE-2.0.html"
     *      )
     * )
     *
     * @OA\Server(
     *      url=L5_SWAGGER_CONST_HOST,
     *      description="Demo API Server"
     * )

     *
     *
     */
class ApiDocumentation extends Controller
{
/**
  * @OA\Post(
    * path="/api/vi/book/list",
    * tags={"Import"},
    * summary="Import User Data",
    * operationId="getPackageDetail",
  *   @OA\Parameter(
     *      name="Excel File",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="file"
     *      )
     *   ),
}
