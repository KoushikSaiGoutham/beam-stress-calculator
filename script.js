// let num1 = document.getElementById("moment").value;
// let value1 = parseFloat(num1);
// let num2 = document.getElementById("moment").value;
// let value2 = parseFloat(num2);
// let num3 = document.getElementById("moment").value;
// let value3 = parseFloat(num3);
function stressCalculator(){
  const a = parseFloat(document.getElementById("moment").value);
  const b = parseFloat(document.getElementById("distance").value);
  const c = parseFloat(document.getElementById("Inertia").value);
  if (isNaN(a) || isNaN(b) || isNaN(c) || c === 0) {
    document.getElementById("result").textContent = "Enter valid Inputs.";
    return;
}
const stress = (a*b) / c;
document.getElementById("result").textContent =`Bending Stress = ${stress.toFixed(5)} Pa`
}
document.querySelector(".calc").addEventListener("click", stressCalculator);
document.addEventListener("keydown",function(enter){
    if(enter.key==="Enter"){
        stressCalculator()
    }
})