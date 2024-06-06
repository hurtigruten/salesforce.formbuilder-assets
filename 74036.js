function theMainFunction(){
	setTimeout(function() {
		
		var value1 = loader.getDOMAbstractionLayer().getControlValueById('2912856'); // '2912856' id of the control where the selected value is (the hidden input) 
loader.getDOMAbstractionLayer().setControlValueById('2900914', value1); //'2900914' id of the picklist values (the dropdown) 

var value2 = loader.getDOMAbstractionLayer().getControlValueById('2912858'); // '2912858' id of the control where the selected value is (the hidden input) 
loader.getDOMAbstractionLayer().setControlValueById('2900915', value2); //'2900915' id of the picklist values (the dropdown)
}, 10000);	
	
}
window.onload = theMainFunction;
