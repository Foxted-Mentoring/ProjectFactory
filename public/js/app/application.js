var app = angular.module('app', []);

app.filter('random', function() {
        return function(items) {
            if(! items instanceof Array) {
                return [];
            }
            var i = parseInt(Math.random() * (items.length - 0) + 0);

            console.log(items[i]);
            return items[i];
        };
    })

app.controller('ProjectsController', ['$scope', function($scope, $filter){
    $scope.projects = [
        'Todo App',
        'Project Management App',
        'Contacts App',
        'Social Network',
        'Video Sharing App',
        'Photo Sharing App'
    ];

    $scope.backends = [
        {
            framework: 'Laravel',
            language:  'PHP'
        },
        {
            framework: 'Symfony',
            language:  'PHP'
        },
        {
            framework: 'Lumen',
            language:  'PHP'
        },
        {
            framework: 'Slim',
            language:  'PHP'
        },
        {
            framework: 'Sinatra',
            language:  'Ruby'
        },
        {
            framework: 'Rails',
            language:  'Ruby'
        },
        {
            framework: 'Lotus',
            language:  'Ruby'
        },
        {
            framework: 'Django',
            language:  'Python'
        },
        {
            framework: 'Node',
            language:  'Javascript'
        }
    ];

    $scope.frontends = [
        'Angular.js',
        'Ember.js',
        'Backbone.js',
        'Knockout.js',
        'TodoMVC',
        'Meteor',
        'jQuery'
    ];

    $scope.reload = function() {
        $scope.randomProject = $scope.projects[Math.floor(Math.random() * $scope.projects.length)];
        $scope.randomBackend = $scope.backends[Math.floor(Math.random() * $scope.backends.length)];
        $scope.randomFrontend = $scope.frontends[Math.floor(Math.random() * $scope.frontends.length)];
    }
}]);
//# sourceMappingURL=application.js.map
