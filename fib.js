//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
    
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1";//initialize the Fibonacci series output to include the first two numbers
    
    if (isNaN(intCount)||intCount<2||intCount>100) {
        $("total_fib").value = ""; //pops up a box to inform the user of the alert below
        alert ("I'm sorry but your number is invalid. Please try again."); //informs the user that they have entered a number that is invalid
    }

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 
    else {
        while (intCount > 2) {
            k = i + j; //adds previous number
            i = j; //switches out the number so that i equals the new lowest number to be added
            j = k; //switches out the number so that j equals the new highest number to be added
            intCount--;
            stringOutput = stringOutput + " " + k; //adds the past number to figure out the Fibinacci number
        }
    }
    $("output").value = stringOutput; //sends the output to the DOM
};

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  