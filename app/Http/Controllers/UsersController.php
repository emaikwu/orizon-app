<?php

namespace App\Http\Controllers;

use App\User;
use Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;    
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::get();
        return response()->json($users, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            "first_name" => "required",
            "last_name" => "required",
            "role" => "required",
            "photo" => "required",
            "email" => "required|email",
            "password" => "required|min:8",
        ];

        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return response()->json(null, 400);
        }
        $data = [];
        $data["first_name"] = $request->first_name;
        $data["last_name"] = $request->last_name;
        $data["role"] = $request->role;
        $data["photo"] = $request->photo;
        $data["email"] = $request->email;
        $data["password"] = Hash::make($request->password);
        $data["api_token"] = Str::random(60);
        $user = User::create($data);
        return response()->json($user, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        if(is_null($user)) {
            return response()->json(null, 404);
        }

        return response()->json($user, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if(is_null($user)) {
            return response()->json(null, 404);
        }

        $rules = [
            "first_name" => "required",
            "last_name" => "required",
            "role" => "required",
            "photo" => "required",
            "email" => "required|email",
            "password" => "required|min:8",
        ];

        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return response()->json(null, 400);
        }

        $user->update($request->all());
        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if(is_null($user)) {
            return response()->json(null, 404);
        }

        $user->delete();
        return response()->json($user, 200);
    }
}
