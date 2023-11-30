<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Portatiles;

class ProductController extends Controller
{

    public function index()
    {
        $Portatil = Portatiles::all();
        return $Portatil;
    }


    public function store(Request $request)
    {
        $Portatile = new Portatiles();
        $Portatile->descripcion = $request -> descripcion;
        $Portatile->price = $request -> price;
        $Portatile->stock = $request -> stock;
        $Portatile->img = $request -> img;
        $Portatile->Save();
    }


    public function show(string $id)
    {
        $Portatile = Portatiles::find($id);
        return $Portatile;
    }

    public function update(Request $request, string $id)
    {
        $Portatile = Portatiles::FindOrfail($request->id);
        $Portatile->Descripcion = $request -> Descripcion;
        $Portatile->Price = $request -> Price;
        $Portatile->Stock = $request -> Stock;
        $Portatile->img = $request -> img;
        
        $Portatile->Save();
    }


    public function destroy(string $id)
    {
        $Portatile = Portatiles::destroy($id);
        return $Portatile;
    }
}
