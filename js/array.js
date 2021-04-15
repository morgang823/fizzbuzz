function printNumbers() {
    let start = parseInt(document.getElementById("numOne").value);
    let end = parseInt(document.getElementById("numTwo").value);
    let numbers = getRange(start, end);
    displayData(numbers);
}
//Business type functionality, get the range of numbers
function getRange(start, end) {
    let numberArray = [];
    // Values[0,1,2,3,4,5,6,7,8,9]
    //indexes [0,1,2,3,4,5,6,7,8]
    //length = 10
    //numberArray[0] == 1
    for (let index = start; index <= end; index++) {
        numberArray.push(index);

    }
    return numberArray;
}

//Display Data Function
function displayData(numbers) {
    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;

    //clear the table 
    resultsBody.innerHTML = "";

    // loop over every element in the numbers array
    // get the value and write it to the page
    for (let i = 0; i < numbers.length; i += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        let cols = dataRow.querySelectorAll("td");

        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[i + colIndex]
            if (typeof value === "undefined") {
                value = "";
            } else if (value % 3 == 0 && value % 15 != 0) {
                cols[colIndex].classList.add("fizz")
                value = "Fizz";
            }
            if (typeof value === "undefined") {
                value = "";
            } else if (value % 5 == 0 && value % 15 != 0) {
                cols[colIndex].classList.add("buzz")
                value = "Buzz";
            }

            if (typeof value === "undefined") {
                value = "";
            } else if (value % 15 == 0) {
                cols[colIndex].classList.add("fizzBuzz")
                value = "FizzBuzz";
            }
            // tds use textContent to set content
            cols[colIndex].textContent = value;
        }

        // add the row to the page
        resultsBody.appendChild(dataRow);
    }

}