/**
 * Created by James Jiangon 6/9/2017.
 */
var app = angular.module('freelo.controllers', []);

app.controller('apply.ctrl', ['$scope', '$http', function ($scope, $http) {
    $scope.cl = "";
    $scope.cd = "";
    $scope.dl = "";
    $scope.dd = "";
    $scope.lpg = "";
    $scope.clp = "";
    $scope.email = "";
    $scope.sd = false;
    $scope.phone = "";

    $scope.confirmation = false;

    $scope.add=function () {
        $http({
            method: 'POST',
            url: 'https://sheetsu.com/apis/v1.0/17399c9e8a52',
            headers: {
                'Content-Type': "application/json"
            },
            data: {
                "cl": $scope.cl,
                "cd": $scope.cd
                "dl": $scope.dl,
                "dd": $scope.dd,
                "lpg": $scope.lpg,
                "clp": $scope.clp,
                "email": $scope.email,
                "sd": $scope.sd,
                "phone": $scope.phone
            }
        }).then(function success(resp){
            console.log(resp);
        }, function error(resp){
            console.log(resp);
        });

        //Clear the fields
        $scope.cl = "";
        $scope.cd = "";
        $scope.dl = "";
        $scope.dd = "";
        $scope.lpg= "";
        $scope.clp = "";
        $scope.email= "";
        $scope.sd = false;
        $scope.phone = "";
        $scope.confirmation = true;
    }
}]);
