var app = angular.module('github-api');

app.controller('MainController', function($scope, gitHubService) {
  $scope.getUser = function() {
    gitHubService.getUser($scope.username).then(function(data) {
      $scope.user = data.data;
    })
    gitHubService.getUserRepos($scope.username).then(function(data) {
      $scope.repos = data.data;
      console.log($scope.repos);
    })
  }

  var rateLimit = function() {
    gitHubService.getRateLimit().then(function(data) {
      console.log(data);
    });
  }()

});