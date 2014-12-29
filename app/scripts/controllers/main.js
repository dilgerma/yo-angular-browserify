'use strict';

/**
 * @ngdoc function
 * @name tecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tecApp
 */
angular.module('tecApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
