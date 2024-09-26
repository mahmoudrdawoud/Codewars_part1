// 8 kyu
// Calculate BMI


function bmi(weight, height) {
  const bmiResult = weight / Math.pow(height, 2);
  return bmiResult <= 18.5
    ? "Underweight"
    : bmiResult <= 25
    ? "Normal"
    : bmiResult <= 30
    ? "Overweight"
    : "Obese";
}

console.log(bmi(100, 176));