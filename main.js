var currentDayEl = $('#currentDay');

var saveButtonEl = $('.saveBtn'); 

var currentTime = moment().format('H');



// console.log(saveContentEl)





hourNine = 9;
hourTen = 10;
hourEleven = 11;
hourTwelve = 12;
hourThirteen = 13;
hourFourteen = 14;
hourFifteen = 15;
hourSixteen = 16;
hourSeventeen = 17;  



function displayTime() {
	var rightNow = moment().format('dddd') + ", " + moment().format('MMM Do YYYY');
	currentDayEl.text(rightNow);

}
displayTime();

function evaluateTime() {
	// Nine AM
	if (hourNine < currentTime) {
	$("#nine").attr('style', 'background-color: #d3d3d3');
	}

	if (hourNine == currentTime) {
	$("#nine").attr('style', 'background-color: #ff6961');
	}
	
	if (hourNine > currentTime) {
	$("#nine").attr('style', 'background-color: #77dd77');
	}
	// Ten AM
	if (hourTen < currentTime) {
	$("#ten").attr('style', 'background-color: #d3d3d3');
	}
	
	if (hourTen == currentTime) {
	$("#ten").attr('style', 'background-color: #ff6961');
	}
		
	if (hourTen > currentTime) {
	$("#ten").attr('style', 'background-color: #77dd77');
	}

	// Eleven AM
	if (hourEleven < currentTime) {
	$("#eleven").attr('style', 'background-color: #d3d3d3');
	}
		
	if (hourEleven == currentTime) {
	$("#eleven").attr('style', 'background-color: #ff6961');
	}
			
	if (hourEleven > currentTime) {
	$("#eleven").attr('style', 'background-color: #77dd77');
	}
	
	// Twelve PM
	if (hourTwelve < currentTime) {
	$("#twelve").attr('style', 'background-color: #d3d3d3');
	}
		
	if (hourTwelve  == currentTime) {
	$("#twelve").attr('style', 'background-color: #ff6961');
	}
			
	if (hourTwelve > currentTime) {
	$("#twelve").attr('style', 'background-color: #77dd77');
	}

	// One PM
	if (hourThirteen < currentTime) {
	$("#thirteen").attr('style', 'background-color: #d3d3d3');
	}
			
	if (hourThirteen == currentTime) {
	$("#thirteen").attr('style', 'background-color: #ff6961');
	}
				
	if (hourThirteen > currentTime) {
	$("#thirteen").attr('style', 'background-color: #77dd77');
	}

	// Two PM
	if (hourFourteen < currentTime) {
	$("#fourteen").attr('style', 'background-color: #d3d3d3');
	}
			
	if (hourFourteen == currentTime) {
	$("#fourteen").attr('style', 'background-color: #ff6961');
	}
				
	if (hourFourteen > currentTime) {
	$("#fourteen").attr('style', 'background-color: #77dd77');
	}

	// Three PM
	if (hourFifteen < currentTime) {
	$("#fifteen").attr('style', 'background-color: #d3d3d3');
	}
				
	if (hourFifteen == currentTime) {
	$("#fifteen").attr('style', 'background-color: #ff6961');
	}
					
	if (hourFifteen > currentTime) {
	$("#fifteen").attr('style', 'background-color: #77dd77');
	}

	// Four PM
	if (hourSixteen < currentTime) {
	$("#sixteen").attr('style', 'background-color: #d3d3d3');
	}
				
	if (hourSixteen == currentTime) {
	$("#sixteen").attr('style', 'background-color: #ff6961');
	}
					
	if (hourSixteen > currentTime) {
	$("#sixteen").attr('style', 'background-color: #77dd77');
	}

	// Five PM
	if (hourSeventeen < currentTime) {
	$("#seventeen").attr('style', 'background-color: #d3d3d3');
	}
				
	if (hourSeventeen == currentTime) {
	$("#seventeen").attr('style', 'background-color: #ff6961');
	}
					
	if (hourSeventeen > currentTime) {
	$("#seventeen").attr('style', 'background-color: #77dd77');
	}




}
evaluateTime();

saveButtonEl.on('click', function() {
	if (localStorage == null) {
	var saveInput = document.querySelector('.saveContent').value;
	localStorage.setItem('task', saveInput);

	document.querySelector('.saveContent').value = localStorage.getItem('task');

	}


});

