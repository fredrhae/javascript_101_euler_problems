//The Odin Project - Javascript 101 - Euler problems

/*---------------------------------------------------------------
						Solution for Problem 1
-----------------------------------------------------------------*/
var checkNumberIsMultiple = function(number, multiple) {
    if(number % multiple === 0) {
        return true;
    }
	return false;
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
};

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

var getNextFibonacciElementFromArray = function () {
    var latestElement = fibonacciArray[fibonacciArray.length - 1];
    if(fibonacciArray.length > 1) {
        var penultimateElement = fibonacciArray[fibonacciArray.length - 2];
        return penultimateElement + latestElement;
    } else {
        return latestElement;
    }
};

var numberIsEven = function(number) {
	if(number % 2 === 0)
	{
		return true;
	}
	return false;
};

var generateFibonacciArray = function (maximum) {
	fibonacciArray = [1,2];	
    var currentFibonacci = fibonacciArray[fibonacciArray.length - 1];
    while(currentFibonacci < maximum)
    {
        currentFibonacci = getNextFibonacciElementFromArray();
            
        if(currentFibonacci < maximum)
        {
            fibonacciArray.push(currentFibonacci);   
        }
    }
};

// Initial values
var maximumFibonacci = 1000000;
var fibonacciArray = [1,2];

var getSumFromEvenFibonacciNumbers = function () {
    maximumFibonacci = document.getElementById("problem2_maximum_fibonacci").value;

    generateFibonacciArray(maximumFibonacci);
	
    var sumAllEvenNumbers = 0;
    for(var key in fibonacciArray)
    {
        if(numberIsEven(fibonacciArray[key]))
        {
          sumAllEvenNumbers += fibonacciArray[key];
        }
    }
	
	// Update result in HTML
	document.getElementById("problem2_answer").innerHTML = sumAllEvenNumbers;

    return sumAllEvenNumbers;
};

/*---------------------------------------------------------------
					Solution for Problem 3
-----------------------------------------------------------------*/


var numberIsDivisible = function(dividend, divisor) {
    if(dividend % divisor === 0)
    {
        return true;
    }
    return false;
};

var isLastPrimeFactor = function (dividend,divisor) {
    if((dividend / divisor) === 1)
    {
        return true;
    }
    return false;
};

// Set initial prime factor
var lastPrimeFactor = 2;

var getNextPrimeFactor = function(number) {
    var continueSearching = true;
    
    while(continueSearching)
    {
        if(numberIsDivisible(number, lastPrimeFactor))
        {
            continueSearching = false;
        } else {
            lastPrimeFactor ++;
        }
    }
    
    return lastPrimeFactor;
};


var primeFactors = [];

var getLargestPrimeFactor = function() {
    var continueFactoring = true;
    var dividend = document.getElementById("problem3_input").value;
    var divisor = 0;
	
	// Reset initial values for prime factors
	primeFactors = [];
	lastPrimeFactor = 2;
	
    while(continueFactoring) {
        divisor = getNextPrimeFactor(dividend);
        if(!isLastPrimeFactor(dividend, divisor))
        {
            dividend /= divisor;
        } else {
            continueFactoring = false;
        }
        primeFactors.push(divisor);
    }
	
	// Update result in HTML
	document.getElementById("problem3_answer").innerHTML = lastPrimeFactor;
    
    return lastPrimeFactor;
};

/*---------------------------------------------------------------
						Event handlers
-----------------------------------------------------------------*/

window.onload = function () {
	var problem1_answer = document.getElementById("problem1_answer");
	problem1_answer.innerHTML = getSumFromMultiples();
	var problem2_answer = document.getElementById("problem2_answer");
	problem2_answer.innerHTML = getSumFromEvenFibonacciNumbers();
	var problem3_answer = document.getElementById("problem3_answer");
	problem3_answer.innerHTML = getLargestPrimeFactor();
}