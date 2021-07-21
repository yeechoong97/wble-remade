<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use JWTAuth;
use JWTAuthException;


class UserController extends Controller
{
    private function getToken($username, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['username'=>$username, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }
    public function login(Request $request)
    {
        $user = User::where('username', $request->username)->get()->first();
        if ($user && Hash::check($request->password, $user->password)) // The passwords match...
        {
            $token = self::getToken($request->username, $request->password);
            // $user->remember_token = $token;
            // $user->save();

            $response = ['success'=>true, 'data'=>['role'=>$user->role,'username'=>$user->username,'id'=>$user->id,'auth_token'=>$token,]];           
        }
        else 
        $response = ['success'=>false, 'data'=>'Record doesnt exists'];

        return response()->json($response, 201);
    }

    public function register($request)
    { 
        $payload = [
            'username'=>$request['username'],
            'password'=> Hash::make($request['password']),
            'role' => $request['role'],
        ];
                
        $user = User::create($payload);
        if ($user->save())
        {
            
            // $token = self::getToken($request->email, $request->password); // generate user token
            
            // if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            // $user = User::where('email', $request->email)->get()->first();
                        
            // $response = ['success'=>true, 'data'=>['username'=>$user->username,'id'=>$user->id,'email'=>$request->email,'auth_token'=>$token]]; 
            $response = ['success'=> true, 'data'=> 'Registration is successful'];       
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
        
        return response()->json($response, 201);
    }

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
        $user->username = $req->username;
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
