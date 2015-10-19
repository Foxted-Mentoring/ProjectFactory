<!DOCTYPE html>
<html>
    <head>
        <title>Projects Factory</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body ng-app="app">
        <div class="container">
            <div class="content" ng-controller="ProjectsController" ng-init="reload()">
                <a href="#" ng-click="reload()"><i class="fa fa-refresh fa-spin fa-3x"></i></a>
                <div class="divider">
                    <span>Project</span>
                </div>
                <h1>@{{ randomProject }}</h1>
                <div class="columns">
                    <div class="half">
                        <div class="divider">
                            <span>Backend</span>
                        </div>
                        <h2>@{{ randomBackend.framework }}&nbsp;(@{{ randomBackend.language }})</h2>
                    </div>
                    <div class="half">
                        <div class="divider">
                            <span>Frontend</span>
                        </div>
                        <h2>@{{ randomFrontend }}</h2>
                    </div>
                </div>
                <footer>
                    <a href="https://github.com/foxted/ProjectFactory">Project Factory</a> by <a href="http://valentinprugnaud.com">Valentin Prugnaud</a>
                </footer>
            </div>
        </div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
    <script src="{{ asset('js/app/application.js') }}"></script>
</html>
