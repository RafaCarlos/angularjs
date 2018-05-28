var app = angular.module('pageApp', []);

app.controller('crtlFav', function($scope) {
    $scope.toggleClass = false;
    $scope.changeClass = function() {
        $scope.toggleClass = !$scope.toggleClass;
    }
});

app.controller('crtlDetail', function($scope) {
    $scope.showDetail = false;
    $scope.toggleClass = false;
    $scope.textNav = 'Ver detalhes'
    $scope.openDetail = function() {
        $scope.showDetail = !$scope.showDetail;
        $scope.toggleClass = !$scope.toggleClass;
        $scope.textNav = $scope.textNav === 'Ver detalhes' ? 'Fechar detalhes' : 'Ver detalhes';
    }
});

app.controller('carsCtrl', function($scope, $http) {
    $http.get("carros.json").then(function(response) {
        $scope.myData = response.data.carros;

        angular.forEach($scope.myData, function(value, key) {
            $scope.myData2 = $scope.myData[key].lista;
        });

        angular.forEach($scope.myData, function(value, key) {
            $scope.myData3 = $scope.myData[key].opcionais;
        });
    });
});