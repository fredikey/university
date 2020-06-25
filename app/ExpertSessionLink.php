<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class ExpertSessionLink extends Model
{
    protected $table = 'expert_session_links';
    protected $guarded = [];
    public $timestamps = false;

    public function ExpertSession()
    {
        return $this->belongsTo('App\ExpertSession');
    }
}