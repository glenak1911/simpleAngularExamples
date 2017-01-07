var myApp = angular.module('myApp',[]);

//Create Controllers object literal
var controllers = {};

controllers.SimpleController = function($scope){
  $scope.customers=[
    {name:'Dave Jones',city:'Phoenix'},
    {name:'Jamie Riley',city:'Atlanta'},
    {name:'Heedy Wahlin',city:'Chandler'},
    {name:'Thomas Winter',city:'Seattle'}
  ]
}

myApp.controller(controllers);
