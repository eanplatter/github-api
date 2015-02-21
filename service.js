var app = angular.module('github-api');

app.service('gitHubService', function($http, env) {

  var param = "?client_id=" + env.id + "&client_secret=" + env.sec;

  this.getUser = function(username) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + param
    })
  }

  this.getUserRepos = function(username) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos' + param
    })
  }

  this.getRateLimit = function() {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/rate_limit' + param
    })
  }
});

