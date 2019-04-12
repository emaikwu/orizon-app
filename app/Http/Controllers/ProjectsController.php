<?php

namespace App\Http\Controllers;

use App\Project;
use Validator;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $project = Project::get();
        return response()->json($project, 200);
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
            "client_name" => "required",
            "client_role" => "required",
            "client_photo" => "required",
            "client_remark" => "required",
            "project_photo" => "required",
            "project_title" => "required",
            "project_link" => "required",
            "project_info" => "required"
        ];

        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $project = Project::create($request->all());
        return response()->json($project, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = Project::find($id);
        if(is_null($project)) {
            return response()->json(null, 404);
        }

        return response()->json($project, 200);
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

        $project = Project::find($id);
        if(is_null($project)) {
            return response()->json(null, 404);
        }

        $rules = [
            "client_name" => "required",
            "client_role" => "required",
            "client_photo" => "required",
            "client_remark" => "required",
            "project_photo" => "required",
            "project_title" => "required",
            "project_link" => "required",
            "project_info" => "required"
        ];

        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $project->update($request->all());
        return response()->json($project, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::find($id);
        if(is_null($project)) {
            return response()->json(null, 404);
        }

        $project->delete();
        return response()->json(null, 204);
    }

}
