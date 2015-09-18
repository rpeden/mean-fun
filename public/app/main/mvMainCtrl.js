angular.module('app').controller('mvMainCtrl', function($scope){
  $scope.courses = [
    {name: 'C# for Sociopaths', featured: true, published: new Date('9/18/2015')},
    {name: 'C# for Non-Sociopaths', featured: true, published: new Date('6/18/2014')},
    {name: 'Nothing Important', featured: false, published: new Date('6/15/2015')},
    {name: 'Birdwatching', featured: false, published: new Date('9/18/2014')},
    {name: 'Basket Weaving', featured: false, published: new Date('9/18/2014')},
    {name: 'How to Annoy Your Cat', featured: true, published: new Date('2/18/2015')},
    {name: 'Maintainable Code', featured: false, published: new Date('9/18/2015')},
    {name: 'How to Write Awful Code', featured: true, published: new Date('1/23/2014')},
    {name: 'Code Reviews', featured: true, published: new Date('9/18/2015')},
    {name: 'How to Make Ice Cream', featured: false, published: new Date('9/18/2014')},
    {name: 'Death March Coding for Fun and Profit', featured: false, published: new Date('9/18/2015')},
  ]
});
