function printNumbers() {
    let startNum = parseInt(document.getElementById('numOne').value);
    let endNum = parseInt(document.getElementById('numTwo').value);
    let numFizz = parseInt(document.getElementById('numFizz').value);
    let numBuzz = parseInt(document.getElementById('numBuzz').value);
    let numFizzBuzz = numFizz * numBuzz;

    let numbers = getRange(startNum, endNum);

    displayData(numbers, numFizz, numBuzz, numFizzBuzz);
}

// Gets the range of numbers
function getRange(start, end) {
    let numberArray = [];

    for (let i = start; i <= end; i++) {
        numberArray.push(i);
    }

    return numberArray;
}

// Displays the numbers on the page
function displayData(numbers, fizz, buzz, fizzbuzz) {
    const rowTemplate = document.getElementById('Data-Template');
    const resultsBody = document.getElementById('resultsBody');
    let colCount = rowTemplate.content.cloneNode('true').querySelectorAll('td')
        .length;

    resultsBody.innerHTML = ''; // Clear the table

    // Loop over every element in the numbers array
    for (let rowIndex = 0; rowIndex < numbers.length; rowIndex += colCount) {
        // You need to clone it each time
        let dataRow = rowTemplate.content.cloneNode('true');

        // Return an array of columns
        let cols = dataRow.querySelectorAll('td');

        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[rowIndex + colIndex];

            // FIZZBUZZ LOGIC
            // Check if out of bounds
            if (typeof value === 'undefined') {
                value = '';
            } else if (value % fizzbuzz === 0) {
                value = `FizzBuzz (${value})`;
                cols[colIndex].classList.add('fizzbuzz');
            } else if (value % fizz === 0) {
                value = `Fizz (${value})`;
                cols[colIndex].classList.add('fizz');
            } else if (value % buzz === 0) {
                value = `Buzz (${value})`;
                cols[colIndex].classList.add('buzz');
            }

            // TD value is textContent (not like other HTML tags that use value or innerHTML)
            cols[colIndex].textContent = value;
        }

        // Inside the row loop (add row to the page)
        resultsBody.appendChild(dataRow);
    }
}