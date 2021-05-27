<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class UserController extends Controller
{
    //

    public function index() {
        return User::all();
    }

    public function store(Request $req) {
        $user = $req->all();
        User::create($user);
        return 200;
    }

    public function update(Request $req) {
        $user = User::find($req->id);
        $user->userId = $req->userId;
        $user->name = $req->name;
        $user->email = $req->email;
        $user->role = $req->role;
        $user->password = Hash::make($req->password);
        $user->save();
        return 200;
    }

    public function destroy(Request $req) {
        $user = User::find($req->id);
        $user->delete();
        return 200;
    }
}
