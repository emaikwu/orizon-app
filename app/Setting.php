<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
  protected $fillable= [
	"twitter",
	"instagram",
	"github",
	"youtube",
	"facebook",
	"snapchat",
	"email",
	"phone_1",
	"phone_2",
	"intro",
	"home_photo"
  ];
}
