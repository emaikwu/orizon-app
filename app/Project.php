<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
    	"client_name",
    	"client_role",
    	"client_remark",
    	"client_photo",
    	"project_photo",
    	"project_title",
    	"project_link",
    	"project_info"
    ];
}
