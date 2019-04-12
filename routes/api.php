<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::resource('/v1/users', 'UsersController');
Route::resource('/v1/posts', 'PostsController');
Route::resource('/v1/categories', 'CategoriesController');
Route::resource('/v1/comments', 'CommentsController');
Route::resource('/v1/replies', 'RepliesController');
Route::resource('/v1/settings', 'SettingsController');
Route::resource('/v1/projects', 'ProjectsController');