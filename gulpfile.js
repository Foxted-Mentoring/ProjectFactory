var elixir = require('laravel-elixir');
require('laravel-elixir-angularjs');

elixir(function(mix) {
    mix.sass('app.scss');
    mix.angular();
});
