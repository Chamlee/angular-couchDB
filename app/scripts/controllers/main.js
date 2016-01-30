'use strict';

/**
 * @ngdoc function
 * @name chamleeAngularCouchdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chamleeAngularCouchdbApp
 */
angular.module('chamleeAngularCouchdbApp')
    .controller('MainCtrl', function ($scope, $http, appSettings) {
        console.log(appSettings);
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        function getItems () {
            $http.get(appSettings.db + '/_design/app/_view/byName')
                .success(function (data) {
                    $scope.items = data.rows;
                });
        }
        getItems();
    });
