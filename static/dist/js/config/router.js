(function(angular){
	var app = angular.module('test');

	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		// Redirect to "main" state when undefined state is requested
		$urlRouterProvider.otherwise('/');

		// Register state "main" for "/" route
		$stateProvider.state('main', {
			url: '/',
			views: {
				'@': {
					templateUrl: 'views/site/index.html',
					controller: 'SiteController'
				}
			}
		});
	}]);
})(angular);