/* - - - - - - - - - - - - - - - -
Author: River
Desc: Allows users to enter an amount of currency to 
                        select an option on what to convert
                        that amount to
                        exp: USD to EURO
Date: 2/27/2025                   
- - - - - - - - - - - - - - - - */

window.onload = () => {

//onchange function for USD conversion
    
    $("changeUSD").onchange = () => {

        getCurrency($("usd").value, $("changeUSD").value, $("pUSD"));
}

//oninput function for USD conversion

    $("usd").oninput = () => {

        getCurrency($("usd").value, $("changeUSD").value, $("pUSD"));
    }

//onchange function for CAD conversion

    $("changeCAD").onchange = () => {

        getCurrency($("cad").value, $("changeCAD").value, $("pCAD"));

    }
//oninput function for CAD conversion

    $("cad").oninput = () => {

        getCurrency($("cad").value, $("changeCAD").value, $("pCAD"));
    }

    //onchange function for JPY conversion
    $("changeJPY").onchange = () => {

        getCurrency($("jpy").value, $("changeJPY").value, $("pJPY"));

    }

    
//oninput function for JPY conversion
    $("jpy").oninput = () => {
        getCurrency($("jpy").value, $("changeJPY").value, $("pJPY"));
    }

} //end onload

// - - - - - - - - - FUNCTION DEFINITIONS - - - - - - - - - //

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        Name: $
        Desc: get object reference to the 
            object with the matching id
        Args: theId
        Retn: theObject
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function $(theId) {
    let theObject;

    theObject = document.getElementById(theId);

    return theObject;
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        Name: getCurrency
        Desc: convert the currency entered by user 
              when dropdown option is selected 
        Args: currentCurrency, theRate, divOutput
        Retn: newCurrency
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

    let getCurrency = (currentCurrency, theRate, divOutput)  => {
    //variable declaration 
        let newCurrency;

        newCurrency = currentCurrency * theRate;

        divOutput.innerHTML = "Your new currency is: " + newCurrency.toFixed(2);

        //output from function
        return divOutput;
    }

