'use strict';

/**
 * @ngdoc overview
 * @name chamleeAngularCouchdbApp
 * @description
 * # chamleeAngularCouchdbApp
 *
 * Main module of the application.
 */
angular
  .module('chamleeAngularCouchdbApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('appSettings', {
    db: 'http://127.0.0.1:5984/app'
  });

