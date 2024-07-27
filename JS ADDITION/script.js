function calculateSum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      console.error("Please enter valid numbers in both fields.");
      return;
    }
    const sum = num1 + num2;
    console.log("The sum is:", sum);
  }
  