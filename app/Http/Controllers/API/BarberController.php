<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use Illuminate\Http\Request;
use App\Models\Barber;

class BarberController extends Controller
{
    public function getAll(Request $request) {
        return Barber::query()->orderBy('id', 'asc')->get();
    }

    public function getBarber(Request $request, $id) {
        $barber = Barber::query()->find($id);
        $services = $barber->services()->get();
        return ServiceResource::collection($services);
    }
}
