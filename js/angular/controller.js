var Controller = function ($scope, $http) {
   //Empty Controller, add stuff as needed. Make sure your view only references this controller before you remove the other one from app.js and from .html
}

var RegisterController = function ($scope, $http, $location) {
    $scope.form = {};
     //error checking
	 
	 $scope.form.name = "";
	 $scope.form.email = "";
	 $scope.form.name = "";
     $scope.form.friend1 = "";
     $scope.form.friend2 = "";
     $scope.form.friend3 = "";
     $scope.form.handicap = "";
	 //$scope.form.team = "";
	 //$scope.form.gender = "";
	 //$scope.form.height = "";
	 //$scope.form.position = "";
	 //$scope.form.lunch = "";
	 //$scope.form.category = "";
	 $scope.form.confirmation = "";
	 //$scope.form.tournament = "";
	 //$scope.form.extra = "";
	 //$scope.form.three = "";
	 $scope.total = 1.00;
	 
	
	$scope.validateInput = function(){
        
		if(validateName() && validateEmail() && validateHandicap() && validateConfirmation()){
			//this means everything has validated
			$scope.register()
		}else{
			//TODO tell user it failed
			$scope.scrollToTop();
		}
	}
	
	var validateName = function(){
		 $scope.noName = false;
		if($scope.form.name.length <= 0){
			$scope.noName = true;
		}
		return !$scope.noName;
	}
	var validateEmail = function(){
		$scope.noEmail = false;
		if($scope.form.email == null || $scope.form.email.length <= 0){
			$scope.noEmail = true;
		}
		return !$scope.noEmail;
	}
    var validateHandicap = function() {
        $scope.noHandicap = false;
        if($scope.form.handicap == null || $scope.form.handicap.length <= 0){
            $scope.noHandicap = true;
        }
        return !$scope.noHandicap;
    }
	/*var validateCategory = function(){
		$scope.noCategory = false;
		if($scope.form.category.length <=0){
				$scope.noCategory = true;
		}
		return !$scope.noCategory;
	}
	var validateLunch = function(){
		$scope.noLunch = false;
		if($scope.form.lunch.length <=0){
				$scope.noLunch = true;
		}
		return !$scope.noLunch;
	}*/
	var validateConfirmation = function(){
		$scope.noConfirmation = false;
        $scope.form.confirmation = $scope.form.confirmation.trim();
		var ppCheck = new RegExp("(^[a-zA-Z0-9]{17}$)");
		if(ppCheck.test($scope.form.confirmation) || $scope.form.confirmation == "Check" || $scope.form.confirmation == "check"){
            console.log($scope.form.confirmation);
			if($scope.form.confirmation.length <=0){
				$scope.noConfirmation = true;
			}
		}
		
		else{
			$scope.noConfirmation = true;
		}
		console.log($scope.noConfirmation);
        return !$scope.noConfirmation;
        
	}

    $scope.register = function(){
        $http({
            method: "POST",
            url: "https://ishareteam1.na.xom.com/sites/hunitedway/EMCCGolfTournament//_vti_bin/ListData.svc/Registration",
            data: JSON.stringify({"Email" : $scope.form.email, "Name" : $scope.form.name, "Golfer1" : $scope.form.friend1, "Golfer2" : $scope.form.friend2, "Golfer3" : $scope.form.friend3 ,"Handicap" : $scope.form.handicap ,"Paypal" : $scope.form.confirmation}),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; odata=verbose",
            }
        }).success(function(){
			//TODO direct user
			$location.path("done");
		})
        .error(function(){
            alert("Invalid Confirmation Number");
        })
		
    }
    $scope.scrollToTop = function (){
  			scroll(0,0);
	}
	
    $scope.clearFreeAgent = function(){
        $scope.form.height = "";
        $scope.form.gender = "";
    }
    
    $scope.clearTeam = function(){
        $scope.form.team = "";
    }
	
	$scope.updateTotal = function(){
		if($scope.form.tournament && !$scope.form.extra)	
			$scope.total = 45.00;
		else if(!$scope.form.tournament && $scope.form.extra)
			$scope.total = 10.00;
		else if($scope.form.tournament && $scope.form.extra)
			$scope.total = 55.00;
		else
			$scope.total = 0.00;
			
	}
}