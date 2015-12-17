<?php

namespace App\Http\Middleware;

use Closure;

class TrustLoadBalancer
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $request->setTrustedProxies([
            '10.134.162.216',
        ]);

        return $next($request);
    }
}
