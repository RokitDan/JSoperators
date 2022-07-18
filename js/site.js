//var is function scope
//let is block scope

function getNumbers() {
  //get the first value from the page
  let num1 = document.getElementById("numberOne").value;

  //get the second value from the page
  let num2 = document.getElementById("numberTwo").value;

  // try to convert strings to integers
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  // && means AND
  // || means OR
  // ! is the NOT OPERATOR
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    Swal.fire({
      backdrop: false,
      title: "You failed a simple task.",
      text: "Try again, but do it correctly. Enter Numbers.",
    });
  } else {
    let sum = addition(num1, num2);
    let difference = subtraction(num1, num2);
    let product = multiplication(num1, num2);
    let quotient = division(num1, num2);
    let remainder = modulus(num1, num2);
    let sumAll = addAllNumbers(num1, num2);
    let multiplyAll = factorial(num1, num2);
    let dangBoi = chonkySum(product);

    chonkySum(product);

    displayResults(
      `Sum = ${sum}`,
      `Difference = ${difference}`,
      `Product = ${product}`,
      `Quotient = ${quotient}`,
      `Remainder = ${remainder}`,
      `All numbers added = ${sumAll}`,
      `Factorial = ${multiplyAll}`
    );

    // console.log(`num1 = ${num1}, num2 = ${num2}`);
    // console.log(`difference = ${difference}`);
    // console.log(`sum = ${sum}`);
    // console.log(`product = ${product}`);
    // console.log(`quotient = ${quotient}`);
    // console.log(`remainder = ${remainder}`);
    // console.log(`all numbers added = ${sumAll}`);
    // console.log(`all numbers multiplied = ${multiplyAll}`);
  }
}

function chonkySum(x) {
  if (x >= 1000) {
    let damnBoi = document.createElement("h3");
    damnBoi.innerHTML = "HOT DOG, THAT IS A WHOPPER!";
    results.appendChild(damnBoi);
  } else {
    return;
  }
}

//display all results from the math functions
function displayResults(
  sumResult,
  differenceResult,
  productResult,
  quotientResult,
  remainderResult,
  sumAllResult,
  factorialResult
) {
  //finding the div with the id of #results from the app.html document
  let results = document.getElementById("results");
  results.innerHTML = "";

  //create <p></p> tag
  let tagPsum = document.createElement("p");
  tagPsum.innerHTML = sumResult;
  // tagPsum.classList.add("pBlue");

  let tagPdifference = document.createElement("p");
  tagPdifference.innerHTML = differenceResult;
  // tagPdifference.classList.add("pRed");

  let tagPproduct = document.createElement("p");
  tagPproduct.innerHTML = productResult;
  // tagPsum.classList.add("pBlue");

  let tagPquotient = document.createElement("p");
  tagPquotient.innerHTML = quotientResult;

  let tagPremainder = document.createElement("p");
  tagPremainder.innerHTML = remainderResult;

  let tagPsumAll = document.createElement("p");
  tagPsumAll.innerHTML = sumAllResult;

  let tagPfactorial = document.createElement("p");
  tagPfactorial.innerHTML = factorialResult;

  //add to the innerHTML of the #results" div
  results.appendChild(tagPsum);
  results.appendChild(tagPdifference);
  results.appendChild(tagPproduct);
  results.appendChild(tagPquotient);
  results.appendChild(tagPremainder);
  results.appendChild(tagPsumAll);
  results.appendChild(tagPfactorial);
}

//----MATH----//
function addition(x, y) {
  let sum = x + y;
  return sum;
}

function subtraction(x, y) {
  let difference = x - y;
  return difference;
}

function multiplication(x, y) {
  let product = x * y;
  return product;
}

function division(x, y) {
  let quotient = x / y;
  return quotient;
}

function modulus(x, y) {
  let remainder = x % y;
  return remainder;
}

function addAllNumbers(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }
  return sum;
}

function factorial(start, end) {
  let product = 1;
  for (let i = start; i <= end; i++) {
    product = product * i;
  }
  return product;
}
