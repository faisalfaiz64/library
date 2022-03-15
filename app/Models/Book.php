<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\user_action_logs;

class Book extends Model
{
    public $table = 'books';
    public $timestamps = true;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title','isbn', 'published_at', 'status'
    ];

    protected $appends = [
        'bookDetail',
    ];

    public function getBookDetailAttribute(){
        $bookDetail = user_action_logs::where('book_id',$this->id)->latest()->first();
        return $bookDetail;
      }

}
