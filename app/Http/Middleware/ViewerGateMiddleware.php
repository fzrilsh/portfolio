<?php

namespace App\Http\Middleware;

use App\Models\Viewer;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ViewerGateMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $viewer = Viewer::query()->where('ip', $request->ip())->first();
        if(!$viewer) Viewer::query()->create(['ip' => $request->ip(), 'user-agent' => $request->userAgent()]);

        return $next($request);
    }
}
