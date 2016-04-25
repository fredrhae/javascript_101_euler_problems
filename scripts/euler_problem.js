//The Odin Project - Javascript 101 - Euler problems

/*---------------------------------------------------------------
						Solution for Problem 1
-----------------------------------------------------------------*/
var checkNumberIsMultiple = function(number, multiple) {
    if(number % multiple === 0) {
        return true;
    } else {
        return false;
    }
};

var numberIsMultipleFromArrayElement = function (number) { 
    for(var multiple in arrayMultiples)
    {
        if(checkNumberIsMultiple(number, arrayMultiples[multiple]))
        {
            return number;
        }
    }
    return 0;
};

var convertInputToArrayOfNumbers = function(input) {
	var array = [];
	try{
		array = JSON.parse("[" + input + "]");
	} 
	catch(e)
	{
		alert("Error trying get the array of multiples. Please, assure that you have \r\n"
		+"typed it correctly. You should use numbers separated by comma: 3,5,7");
	}
	return array;
}

// Initial values
var maximumNumber = 1000;
var arrayMultiples = [3,5];

var getSumFromMultiples = function() {
	maximumNumber = document.getElementById("problem1_maximum_number").value;
	
	arrayMultiples = convertInputToArrayOfNumbers(document.getElementById("problem1_multiples").value);

    var sumAllMultiples = 0;
    for(var i = 1; i < maximumNumber; i ++) 
    {
        sumAllMultiples += numberIsMultipleFromArrayElement(i);
    }
	
	// Update result in HTML
	document.getElementById("problem1_answer").innerHTML = sumAllMultiples;

    return sumAllMultiples;
};

/*---------------------------------------------------------------
						Solution for Problem 2
-----------------------------------------------------------------*/

/*---------------------------------------------------------------
						Event handlers
-----------------------------------------------------------------*/

window.onload = function () {
	var problem1_answer = document.getElementById("problem1_answer");
	problem1_answer.innerHTML = getSumFromMultiples();
}