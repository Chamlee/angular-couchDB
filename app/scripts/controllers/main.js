'use strict';

/**
 * @ngdoc function
 * @name chamleeAngularCouchdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chamleeAngularCouchdbApp
 */
angular.module('chamleeAngularCouchdbApp')
    .controller('MainCtrl', function ($scope, appSettings) {
        console.log(appSettings);
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
