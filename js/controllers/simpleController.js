var myApp = angular.module('myApp',['ngRoute']);

//Create Controllers object literal
var controllers = {};

//Routes Configuration
myApp.config(function ($routeProvider){
  $routeProvider
    .when('/',
      {
        controller:'SimpleController',
        templateUrl: 'views/View1.html'
      })
    .when('/view2',
      {
          controller:'SimpleController',
          templateUrl:'views/View1.html'
      })
      .otherwise({redirectTo:'/'});
});

//adding SimpleController to the object literal
//as an anonoymous function key pair
controllers.SimpleController = function($scope){
  $scope.customers=[
    {name:'Dave Jones',city:'Phoenix'},
    {name:'Jamie Riley',city:'Atlanta'},
    {name:'Heedy Wahlin',city:'Chandler'},
    {name:'Thomas Winter',city:'Seattle'}
  ]

  $scope.addCustomer = function(){
    $scope.customers.push(
      {name:$scope.newCustomer.name,
      city:$scope.newCustomer.city
    });
  }
}

myApp.controller(controllers);
