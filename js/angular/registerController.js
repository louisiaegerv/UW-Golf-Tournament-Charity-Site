var RegisterController = function ($scope, $http, $timeout, $location, $anchorScroll) {
    $scope.btnText = "Continue";
	$scope.guestCount = 0;
	$scope.subTotal = 0.0;
	$scope.contribution = 0.0;	
	$scope.totalAmt = 0.0;
    $scope.earlyBird = false; //set this to true when you want to end registrations
	$scope.EventTitle = "UW 5K 2016"; //set this to the name of your event
	$scope.applyForm = {};
	
	$scope. numBoxes = 5;
			
	$scope.showDiv = function(showHideDiv) {
				$scope.guestCount++;
				toggle4(showHideDiv);
			}
			
	$scope.hideDiv = function(showHideDiv) {
		toggle4(showHideDiv);
		clearValues();
	}
	
	var clearValues = function(){
		if($scope.guestCount == 0){
			$scope.applyForm.Participant1 = undefined
			$scope.applyForm.mileage1 = undefined;
			$scope.applyForm.pace1 = undefined;
			$scope.selectedShirtSize1 = "ShirtSize"
		}
		else if($scope.guestCount == 1){
			$scope.applyForm.Participant2 = undefined
			$scope.applyForm.mileage2 = undefined;
			$scope.applyForm.pace2 = undefined;
			$scope.selectedShirtSize2 = "ShirtSize"
		}
		else if($scope.guestCount == 2){
			$scope.applyForm.Participant3 = undefined
			$scope.applyForm.mileage3 = undefined;
			$scope.applyForm.pace3 = undefined;
			$scope.selectedShirtSize3 = "ShirtSize"
		}
		else if($scope.guestCount == 3){
			$scope.applyForm.Participant4 = undefined
			$scope.applyForm.mileage4 = undefined;
			$scope.applyForm.pace4 = undefined;
			$scope.selectedShirtSize4 = "ShirtSize"
		}
		else if($scope.guestCount == 4){
			$scope.applyForm.Participant5 = undefined
			$scope.applyForm.mileage5 = undefined;
			$scope.applyForm.pace5 = undefined;
			$scope.selectedShirtSize5 = "ShirtSize"
		}
	}
			
	var toggle4 = function(showHideDiv){
		var ele = document.getElementById(showHideDiv + $scope.guestCount);
	   //alert(counter);
	   if(ele.style.display == "block") {
		//hide div
			ele.style.display = "none";
			$scope.guestCount--;
				  
			console.log("totalpeople" + $scope.guestCount);
			$scope.currentCount = $scope.guestCount + 1;
			$scope.currentValueString = "currentValue"+ $scope.currentCount;
			$scope.currentShirtString = "selectedShirtSize" + $scope.currentCount;
			console.log("CurrentValue String " + $scope.currentValueString);	
			$scope.currentShirtValue = $scope.$eval($scope.currentShirtString);
					  
			if ($scope.currentShirtValue == "Adult" || $scope.currentShirtValue == "Child"){
				console.log($scope.currentShirtValue);
				$scope.$eval($scope.currentShirtString) = "ShirtSize";
				console.log($scope.$eval($scope.currentShirtString));			
			}
			
			$scope.currentValueValue = $scope.$eval($scope.currentValueString);
			console.log("CurrentValue Value " + $scope.currentValueValue);
			if ($scope.currentValueValue == "Child"){	  
				if($scope.childCounter > 0){
					$scope.childCounter--;
				}
			}
			else if ($scope.currentValueValue == "Adult"){
				if($scope.adultCounter > 0){
					$scope.adultCounter--;
				}
			}
					  
			//console.log("CurrenValue Value" + currentValue);
			//sum();
			console.log("adultCounter = " + $scope.adultCounter);
			console.log("childCounter = " + $scope.childCounter);
			$scope.CalcTotal();
			//$scope.subTotal = 30*$scope.childCounter + 40*$scope.adultCounter;					  
			//$scope.totalAmt = $scope.subTotal + $scope.contribution
			console.log("Total Amt:" + $scope.totalAmt);
					  
		}
		else {
			//show div
			ele.style.display = "block";
		}
		
		/*if($scope.guestCount == $scope.numBoxes) {
			document.getElementById("addParticipant").style.display = "none";
		}*/
		console.log($scope.guestCount);
	}
			
	$scope.CalcTotal  = function () {
		$scope.subTotal = 30*$scope.childCounter + 40*$scope.adultCounter;
		/*if($scope.earlyBird == true)
			$scope.totalAmt = ($scope.subTotal*.9) + $scope.contribution
		else*/					
			$scope.totalAmt = $scope.subTotal + $scope.contribution
	}
		
	$scope.dropdownParticipant = function (item) {
 
		$scope.selectedShirtSize = item.size;
		$scope.personValue = item.value;
				
		//debug
		//console.log($scope.selectedShirtSize);
		//console.log(item.value);
		//var comparison = ($scope.personValue).localeCompare($scope.currentValue);
		//alert("Comparison" + comparison);
		
		if($scope.personValue != $scope.currentValue){
			if ($scope.personValue == "Child"){
				if ($scope.currentValue != "" && $scope.adultCounter > 0) {
					$scope.adultCounter--;
				}
				//if (comparison != 0){
				$scope.childCounter++;
				$scope.currentValue = "Child";
			}
			else { //if ($scope.personValue == "Adult"){
				//if (comparison != 0){
				if ($scope.currentValue != "" && $scope.childCounter > 0){
					$scope.childCounter--;
				}
				$scope.adultCounter++;
				$scope.currentValue = "Adult";
			}
			
		//debug
		//console.log("adultCounter = " + $scope.adultCounter);
		//console.log("childCounter = " + $scope.childCounter);
		//$scope.subTotal = 30*$scope.childCounter + 40*$scope.adultCounter;
		//console.log($scope.subTotal);				
		//$scope.totalAmt = $scope.subTotal + $scope.contribution
		//Recalculate Totals
		$scope.CalcTotal();
		//console.log("Total Amt:" + $scope.totalAmt);
		}
	}
			
	$scope.dropdownParticipant1 = function (item) {
		$scope.selectedShirtSize1 = item.size;
		$scope.personValue1 = item.value;

		if($scope.personValue1 != $scope.currentValue1){
			if ($scope.personValue1 == "Child"){
				if ($scope.currentValue1 != "" && $scope.adultCounter > 0) {
					$scope.adultCounter--;
				}
				//if (comparison != 0){
				$scope.childCounter++;
				$scope.currentValue1 = "Child";
			}
			else { //if ($scope.personValue == "Adult"){
				//if (comparison != 0){
				if ($scope.currentValue1 != "" && $scope.childCounter > 0){
					$scope.childCounter--;
				}
				$scope.adultCounter++;
				$scope.currentValue1 = "Adult";
			}
			$scope.CalcTotal();
		}
	}
			
	$scope.dropdownParticipant2 = function (item) {
		$scope.selectedShirtSize2 = item.size;
		$scope.personValue2 = item.value;

		if($scope.personValue2 != $scope.currentValue2){
			if ($scope.personValue2 == "Child"){
				if ($scope.currentValue2 != "" && $scope.adultCounter > 0) {
					$scope.adultCounter--;
				}
				//if (comparison != 0){
				$scope.childCounter++;
				$scope.currentValue2 = "Child";
			}
			else { //if ($scope.personValue == "Adult"){
				//if (comparison != 0){
				if ($scope.currentValue2 != "" && $scope.childCounter > 0){
					$scope.childCounter--;
				}
				$scope.adultCounter++;
				$scope.currentValue2 = "Adult";
			}
			$scope.CalcTotal();
		}					
	}
			
	$scope.dropdownParticipant3 = function (item) {
		$scope.selectedShirtSize3 = item.size;
		$scope.personValue3 = item.value;

		if($scope.personValue3 != $scope.currentValue3){
			if ($scope.personValue3 == "Child"){
				if ($scope.currentValue3 != "" && $scope.adultCounter > 0) {
					$scope.adultCounter--;
				}
				//if (comparison != 0){
				$scope.childCounter++;
				$scope.currentValue3 = "Child";
			}
			else { //if ($scope.personValue == "Adult"){
				//if (comparison != 0){
				if ($scope.currentValue3 != "" && $scope.childCounter > 0){
					$scope.childCounter--;
				}
				$scope.adultCounter++;
				$scope.currentValue3 = "Adult";
			}
			$scope.CalcTotal();
		}	
	}
			
	$scope.dropdownParticipant4 = function (item) {
		$scope.selectedShirtSize4 = item.size;
		$scope.personValue4 = item.value;

		if($scope.personValue4 != $scope.currentValue4){
			if ($scope.personValue4 == "Child"){
				if ($scope.currentValue4 != "" && $scope.adultCounter > 0) {
					$scope.adultCounter--;
				}
				//if (comparison != 0){
				$scope.childCounter++;
				$scope.currentValue4 = "Child";
			}
			else { //if ($scope.personValue == "Adult"){
				//if (comparison != 0){
				if ($scope.currentValue4 != "" && $scope.childCounter > 0){
					$scope.childCounter--;
				}
				$scope.adultCounter++;
				$scope.currentValue4 = "Adult";
			}
			$scope.CalcTotal();
		}					
	}
			
	$scope.dropdownParticipant5 = function (item) {
		$scope.selectedShirtSize5 = item.size;
		$scope.personValue5 = item.value;

		if($scope.personValue5 != $scope.currentValue5){
			if ($scope.personValue5 == "Child"){
				if ($scope.currentValue5 != "" && $scope.adultCounter > 0) {
					$scope.adultCounter--;
				}
				//if (comparison != 0){
				$scope.childCounter++;
				$scope.currentValue5 = "Child";
			}
			else { //if ($scope.personValue == "Adult"){
				//if (comparison != 0){
				if ($scope.currentValue5 != "" && $scope.childCounter > 0){
					$scope.childCounter--;
				}
				$scope.adultCounter++;
				$scope.currentValue5 = "Adult";
			}
			$scope.CalcTotal();
		}
	}	
	
	//Campus Access Dropdown
	$scope.dropdownCampusAccess = function(item) {
		$scope.selectedCampusAccess = item;
		console.log($scope.selectedCampusAccess);
	}
	
	//lists
	$scope.tShirtSizes = [
		{ size:"Men's - S - Back Ordered", value:"Adult"},
		{ size:"Men's - M - Back Ordered", value:"Adult"},
		{ size:"Men's - L", value:"Adult"},
		{ size:"Men's - XL", value:"Adult"},
		{ size:"Men's - 2XL", value:"Adult"},
		{ size:"Men's - 3XL", value:"Adult"},
		{ size:"Men's - 4XL", value:"Adult"},
		{ size:"Women's - XS - Back Ordered", value:"Adult"},
		{ size:"Women's - S - Back Ordered", value:"Adult"},
		{ size:"Women's - M - Back Ordered", value:"Adult"},
		{ size:"Women's - L - Back Ordered", value:"Adult"},
		{ size:"Women's - XL", value:"Adult"},
		{ size:"Women's - 2XL - Back Ordered", value:"Adult"},
        { size:"Youth - S", value:"Child"},
		{ size:"Youth - M", value:"Child"},
		{ size:"Youth - L - Back Ordered", value:"Child"},		
		{ size:"Youth - XL", value:"Child"}

	];
	
	$scope.campusAccess = [
		"Yes",
		"No",
	];
	
	//maybe not needed Angular can do Sum's
	function sum() {
       $scope.subTotal = document.getElementById('SubTotal').value;/*parseInt(adultCounter*35 + childCounter*25);*/
       $scope.contribution = document.getElementById('AddContribution').value;
       if ($scope.subTotal == "")
           $scope.subTotal = 0;
       if ($scope.contribution == "")
           $scope.contribution = 0;
		   
		 if(!isNaN(subTotal)){
			document.getElementById('SubTotal').value = $scope.subTotal;
		 }

       $scope.totalAmt = parseInt($scope.subTotal) + parseInt($scope.contribution);
       if (!isNaN(result)) {
           document.getElementById('Total').value = $scope.totalAmt;
       }
   }
   
   function enablePaceBox() {
	if(document.getElementById('running').checked) {
		document.getElementById("pace").readonly = false;
		}
	else if(document.getElementById('walking').checked) {
		document.getElementById("pace").readonly = true;
		}
   }
	
	$scope.preRegister = function(){ 
		//error checking
		$scope.noName = false;
		$scope.noEmail = false;
		$scope.noMileage = false //running or walking
		$scope.noPhone = false;
		$scope.noShirt = false; 
		$scope.noCampusAccess = false;
		
		//flags
		var xomEmployeeSuccess = true;
		var participant1Success = true;
		var participant2Success = true;
		var participant3Success = true;
		var participant4Success = true;
		var participant5Success = true;

		
		try{
		//XOM employee Name
			if($scope.applyForm.XOMEmployee.length <=0){
				$scope.noName = true;
				xomEmployeeSuccess = false;
			}
		}catch(err){
			$scope.noName = true;
			xomEmployeeSuccess = false;
		}
		//XOM employee phone
		try{
			if($scope.applyForm.Phone.length <10){
				$scope.noPhone = true;
				xomEmployeeSuccess = false;

			}
		}catch(err){
			$scope.noPhone = true;
			xomEmployeeSuccess = false;
		}
		//XOM employee email
		try{
			if($scope.applyForm.Email.length <=0){
				$scope.noEmail = true;
				xomEmployeeSuccess = false;
			}
		}catch(err){
			$scope.noEmail = true;
			xomEmployeeSuccess = false;
		}
		//XOM employee mileage
		try{
			if($scope.applyForm.mileage.length <=0){
				$scope.noMileage = true;
				xomEmployeeSuccess = false;
			}
		}catch(err){
			$scope.noMileage = true;
			xomEmployeeSuccess = false;
		}
		
		//XOM employee shirt
		try{
			if($scope.selectedShirtSize == "ShirtSize"){
				$scope.noShirt = true;
				xomEmployeeSuccess = false;
			}
		}catch(err){
			$scope.noShirt = true;
			xomEmployeeSuccess = false;
		}
		
		//XOM employee campus access
		try{
			if($scope.selectedCampusAccess.length <=0){
				$scope.noCampus = true;
				xomEmployeeSuccess = false;
			}
		}catch(err){
			$scope.noCampus = true;
			xomEmployeeSuccess = false;
		}
		
		//loop through participants
		if($scope.guestCount >= 1){ //Participant 1
			$scope.noParticipant1 = false;
			$scope.noP1tshirt = false;
			$scope.noP1mileage = false;
			
			//Participant 1 Name
			try{
				if($scope.applyForm.Participant1.length <=0){
					$scope.noParticipant1 = true;
					participant1Success = false;
				}
			}catch(err){
				$scope.noParticipant1 = true;
				participant1Success = false;
			}
			
			//Participant 1 mileage
			try{
				if($scope.applyForm.mileage1.length <=0){
					$scope.noP2mileage = true;
					participant1Success = false;
				}
			}catch(err){
				$scope.noP2mileage = true;
				participant1Success = false;
			}
			
			//participant 1 tshirt
			try{
				if($scope.selectedShirtSize1 == "ShirtSize"){
					$scope.noP1tshirt = true;
					participant1Success = false;
				}
			}catch(err){
				$scope.noP1tshirt = true;
				participant1Success = false;
			}
		}
		if($scope.guestCount >= 2){ //Participant 2
			$scope.noParticipant2 = false;
			$scope.noP2tshirt = false;
			$scope.noP2mileage = false;
			
			//Participant 2 Name
			try{
				if($scope.applyForm.Participant2.length <=0){
					$scope.noParticipant2 = true;
					participant2Success = false;
				}
			}catch(err){
				$scope.noParticipant2 = true;
				participant2Success = false;
			}
			
			//Participant 2 mileage
			try{
				if($scope.applyForm.mileage2.length <=0){
					$scope.noP2mileage = true;
					participant2Success = false;
				}
			}catch(err){
				$scope.noP2mileage = true;
				participant2Success = false;
			}
			
			//participant 2 tshirt
			try{
				if($scope.selectedShirtSize2 == "ShirtSize"){
					$scope.noP2tshirt = true;
					participant2Success = false;
				}
			}catch(err){
				$scope.noP2tshirt = true;
				participant2Success = false;
			}
		}
		if($scope.guestCount >= 3){ //Participant 3
			$scope.noParticipant3 = false;
			$scope.noP3tshirt = false;
			$scope.noP3mileage = false;
			
			//Participant 3 Name
			try{
				if($scope.applyForm.Participant3.length <=0){
					$scope.noParticipant3 = true;
					participant3Success = false;
				}
			}catch(err){
				$scope.noParticipant3 = true;
				participant3Success = false;
			}
			
			//Participant 3 mileage
			try{
				if($scope.applyForm.mileage3.length <=0){
					$scope.noP3mileage = true;
					participant3Success = false;
				}
			}catch(err){
				$scope.noP3mileage = true;
				participant3Success = false;
			}
			
			//participant 3 tshirt
			try{
				if($scope.selectedShirtSize3 == "ShirtSize"){
					$scope.noP3tshirt = true;
					participant3Success = false;
				}
			}catch(err){
				$scope.noP3tshirt = true;
				participant3Success = false;
			}
		}
		if($scope.guestCount >= 4){ //Participant 4
			$scope.noParticipant4 = false;
			$scope.noP4tshirt = false;
			$scope.noP4mileage = false;
			
			//Participant 4 Name
			try{
				if($scope.applyForm.Participant4.length <=0){
					$scope.noParticipant4 = true;
					participant4Success = false;
				}
			}catch(err){
				$scope.noParticipant4 = true;
				participant4Success = false;
			}
			
			//Participant 4 mileage
			try{
				if($scope.applyForm.mileage4.length <=0){
					$scope.noP4mileage = true;
					participant4Success = false;
				}
			}catch(err){
				$scope.noP4mileage = true;
				participant4Success = false;
			}
			
			//participant 4 tshirt
			try{
				if($scope.selectedShirtSize4 == "ShirtSize"){
					$scope.noP4tshirt = true;
					participant4Success = false;
				}
			}catch(err){
				$scope.noP4tshirt = true;
				participant4Success = false;
			}
		}
		if($scope.guestCount == 5){ //Participant 5
			$scope.noParticipant5 = false;
			$scope.noP5tshirt = false;
			$scope.noP5mileage = false;
			
			//Participant 5 Name
			try{
				if($scope.applyForm.Participant5.length <=0){
					$scope.noParticipant5 = true;
					participant5Success = false;
				}
			}catch(err){
				$scope.noParticipant5 = true;
				participant5Success = false;
			}
			
			//Participant 5 mileage
			try{
				if($scope.applyForm.mileage5.length <=0){
					$scope.noP5mileage = true;
					participant5Success = false;
				}
			}catch(err){
				$scope.noP5mileage = true;
				participant5Success = false;
			}
			
			//participant 5 tshirt
			try{
				if($scope.selectedShirtSize5 == "ShirtSize"){
					$scope.noP5tshirt = true;
					participant5Success = false;
				}
			}catch(err){
				$scope.noP5tshirt = true;
				participant5Success = false;
			}
		}
		
		if(xomEmployeeSuccess == true && participant1Success == true && participant2Success == true && participant3Success == true && participant4Success == true && participant4Success == true){
			$scope.showme=true;

			register();
			$scope.registerSuccess = true;
			$timeout(function(){
				$scope.registerSuccess = false;
			}, 3000);
			$scope.applyForm = angular.copy($scope.master);
		}
	}
	
	$scope.scrollToTop = function (){
  			var top = $('#register').offset().top - $('navbar-header').height();
  			$('html, body').animate({scrollTop: top}, "slow");
	}
	
	var register = function () {
        
		//$scope.totalAmt = ($scope.subTotal * .9) + $scope.contribution
		//add to transactions table
		addTransactionNumber(); 
	
		//first employee
		var shirt = $scope.selectedShirtSize;
		var mileage = $scope.applyForm.mileage;
		var pace = $scope.applyForm.pace;
		if(pace == undefined)
			pace = "0:00";
		addRunner($scope.applyForm.XOMEmployee, shirt, mileage, pace, $scope.selectedCampusAccess);
		addVisitorInformation($scope.applyForm.XOMEmployee); //add to keep xom employee contact information
		
		if($scope.applyForm.Participant1 != undefined){ //Participant 1
			var pace = $scope.applyForm.pace1;
			if(pace == undefined)
				pace = "0:00";
			addRunner($scope.applyForm.Participant1, $scope.selectedShirtSize1, $scope.applyForm.mileage1, pace, "No");
			//add to vistor registration 
				addVisitorInformation($scope.applyForm.Participant1)
		}
		if($scope.applyForm.Participant2 != undefined){ //Participant 2
			var pace = $scope.applyForm.pace2;
			if(pace == undefined)
				pace = "0:00";
			addRunner($scope.applyForm.Participant2, $scope.selectedShirtSize2, $scope.applyForm.mileage2, pace, "No");
			//add to vistor registration 
			addVisitorInformation($scope.applyForm.Participant2)
		}
		if($scope.applyForm.Participant3 != undefined){ //Participant 3
			var pace = $scope.applyForm.pace3;
			if(pace == undefined)
				pace = "0:00";
			addRunner($scope.applyForm.Participant3, $scope.selectedShirtSize3, $scope.applyForm.mileage3, pace, "No");
			//add to vistor registration 
			addVisitorInformation($scope.applyForm.und)
		}
		if($scope.applyForm.Participant4 != undefined){ //Participant 4
			var pace = $scope.applyForm.pace4;
			if(pace == undefined)
				pace = "0:00";
			addRunner($scope.applyForm.Participant4, $scope.selectedShirtSize4, $scope.applyForm.mileage4, pace, "No");
			//add to vistor registration 
			addVisitorInformation($scope.applyForm.Participant4)
		}
		if($scope.applyForm.Participant5 != undefined){ //Participant 5
			var pace = $scope.applyForm.pace5;
			if(pace == undefined)
				pace = "0:00";
			addRunner($scope.applyForm.Participant5, $scope.selectedShirtSize5, $scope.applyForm.mileage5, pace, "No");
			//add to vistor registration 
			addVisitorInformation($scope.applyForm.Participant5)
		}
    };
	
	var addRunner = function (runnerName, shirtSize, mileage, pace, campusAccess) {
        return $http({
            method: "POST",
            url: "http://ishareteam2.na.xom.com/sites/EMDC9999/UW5K/_vti_bin/ListData.svc/Runners",
			data: JSON.stringify({"Name": runnerName, "TShirtSize": shirtSize, "Mileage": mileage, "Pace": pace, "CampusAccess": campusAccess}),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; odata=verbose",
            }
        });
    };
	var addTransactionNumber = function () {
        return $http({
            method: "POST",
            url: "http://ishareteam2.na.xom.com/sites/EMDC9999/UW5K/_vti_bin/ListData.svc/Transactions",
			data: JSON.stringify({"XOMEmployeeName": $scope.applyForm.XOMEmployee, "SubTotal": $scope.subTotal , "AdditionalContribution": $scope.contribution, "Amount": $scope.totalAmt}),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; odata=verbose",
            }
        });
    };
	
		var addVisitorInformation = function (name) {
        return $http({
            method: "POST",
            url: "http://ishareteam2.na.xom.com/sites/EMDC9999/UW5K/_vti_bin/ListData.svc/Visitors",
			data: JSON.stringify({"XOMEmployee": $scope.applyForm.XOMEmployee, "Name": name , "Email": $scope.applyForm.Email, "Phone": $scope.applyForm.Phone}),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; odata=verbose",
            }
        });
    };
	
	//vars for the form validation
	$scope.registerSuccess = false;
	$scope.noName = false;
	$scope.noPhone = false;
	$scope.noEmail = false;
	$scope.noMileage = false;
	$scope.noShirt = false;
	$scope.noCampus = false;
	
	$scope.noParticipant1 = false;
	$scope.noP1tshirt = false;
	$scope.noP1mileage = false;
	
	$scope.noParticipant2 = false;
	$scope.noP2tshirt = false;
	$scope.noP2mileage = false;
	
	$scope.noParticipant3 = false;
	$scope.noP3tshirt = false;
	$scope.noP3mileage = false;
	
	$scope.noParticipant4 = false;
	$scope.noP4tshirt = false;
	$scope.noP4mileage = false;
	
	$scope.noParticipant5 = false;
	$scope.noP5tshirt = false;
	$scope.noP5mileage = false;
	
	$scope.adultCounter = 0;
	$scope.childCounter = 0;
	//dropdownlist
	//selected dropdown item
	$scope.selectedShirtSize = "ShirtSize" ;
	$scope.selectedShirtSize1 = "ShirtSize" ;
	$scope.selectedShirtSize2 = "ShirtSize" ;
	$scope.selectedShirtSize3 = "ShirtSize" ;
	$scope.selectedShirtSize4 = "ShirtSize" ;
	$scope.selectedShirtSize5 = "ShirtSize" ;
	$scope.currentValue = "";
	$scope.currentValue1 = "";
	$scope.currentValue2 = "";
	$scope.currentValue3 = "";
	$scope.currentValue4 = "";
	$scope.currentValue5 = "";
	$scope.currentValueString;
}