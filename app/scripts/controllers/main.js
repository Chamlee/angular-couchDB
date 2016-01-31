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
        function getItems() {
            $http.get(appSettings.db + '/_design/app/_view/byName')
                .success(function (data) {
                    console.log(data.rows);
                    $scope.items = data.rows;
                });
        }
        getItems();

        $scope.name = null;
        $scope.price = null;
        $scope.items = [];
        $scope.status = '';

        $scope.processForm = function () {
            var item = {
                key: $scope.name,
                value: $scope.price
            };
            postItem(item);
        };

        function postItem(item) {
            console.log(item);
            // optimistic ui update
            $scope.items.push({key: $scope.name, value: $scope.price});
            console.log($scope.items);
            // send post request
            $http.post(appSettings.db, item)
                .success(function () {
                    //getItems();
                }).error(function (res) {
                $scope.status = 'Error: ' + res.reason;
                // refetch items from server
            });
        }
    });
