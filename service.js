var app = angular.module('github-api');

app.service('gitHubService', function($http) {
  this.getUser = function(username) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username
    })
  }

  this.getUserRepos = function(username) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos'
    })
  }

  this.getRateLimit = function() {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/rate_limit'
    })
  }
});

