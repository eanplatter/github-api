var app = angular.module('github-api');

app.service('gitHubService', function($http, env) {

  var id = env.id;
  var sec = env.secret;
  var param = "?client_id=" + id + "&client_secret=" + sec;

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

