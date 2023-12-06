/*
    FUNCTION DECLARATIONS CAN BE WRITTEN IN THEIR OWN FILE
    When documenting fucntion please provide:
        Function Name:
        Parameters:
        Return Value:
        Purpose:
*/

/*
Example 1: NAMED FUNCTION
    Funciton Name: calculateArea
    Parameters: r = represents the radius of a circle
    Return Value: The area of the circle
    Purpose: Calculates the area of the circle based on the provided radius
*/

function calculateArea(r){
    return (r ** 2) * Math.PI
}

/*
Example 2: FUNCTION EXPRESSION
    Function Name: calculateCircumference
    Parameters: r = represents the radius of a circle
    Return Value: the circumference of the circle
    Purpose: Calculates the circumference of the circle based on the provided radius
*/

var calculateCircumference = function(r){
    return 2 * Math.PI * r
}

/*
Example 3: ARROW FUNCTION
    Function Name: calculateDiameter
    Parameters: r = represents the radius of a circle
    Return Value: the diameter of the circle
    Purpose: Calculates the diameter of the circle based on the provided radius
*/

var calculateDiameter = (r) => 2 * r;