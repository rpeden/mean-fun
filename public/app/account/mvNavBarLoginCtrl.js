angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http) {
  $scope.signin = function(username, password) {
    $http.post('/login', {username: username, password: password}).then(function(respose){
      console.log("logged in");
    }, function(response) {
      console.log("failed to log in");
    })
  }
})
