'use strict';

angular.module('sgb-screen-schedule', ['megazord'])
    .controller('sgb-screen-schedule-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams', function ($scope, _router, _screen, _screenParams, $stateParams) {
        _screen.initialize($scope, _screenParams);

        //Add your controller logic here.
        $scope.data=$stateParams.data;
        $scope.data[0].checked=true;
        $scope.selected=[];
        $scope.filters=1;
        $scope.tworows=false;

        var position = function () {
        	for (var i=0;i<$scope.data.length;i++){
        		for (var j=0;j<$scope.data[i].shows.length;j++){
        			$scope.data[i].shows[j].time=$scope.data[i].shows[j].time*5;
        			$scope.data[i].shows[j].duration=$scope.data[i].shows[j].duration*5;
        		}
        	}
        }

        var getSelected = function () {
        	for (var i=0;i<$scope.data.length;i++){
        		if ($scope.data[i].checked===true) {
        			$scope.selected.push($scope.data[i]);
        			for (var j=i;j<$scope.data.length;j++){
        				if ($scope.data[j].checked===true){
        					$scope.selected.push($scope.data[j]);
        				}
        			}
        		}
        	}
        }
        
        position();
        getSelected();
        
        $scope.check = function (option) {
        	$scope.selected=[];
        	if (option.checked===false && $scope.filters===1){
        		option.checked=true;
        		$scope.filters=2;
        		$scope.tworows=true;
        	}
        	else if (option.checked===true && $scope.filters===2){
        		option.checked=false;
        		$scope.filters=1;
        		$scope.tworows=false;
        	}

        	getSelected();
        }

       /* $scope.goShow = function (show) {
        	_router.fireEvent({
				name: 'showContent',
				params: {
					showSelected: show;
				}
			});
        }

        $scope.goHighlights = function () {
        	_router.fireEvent({
				name: 'showHighlights',
				params: {
				}
			});
        }*/

        
    }]);