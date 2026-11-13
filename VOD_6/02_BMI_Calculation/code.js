const from = document.querySelector("form");
// const weight = parseInt(document.querySelector('#weight).value) // this wiil stroe empty value in weight because it fetches value before even entered

from.addEventListener("submit", function (event) {
  event.preventDefault();
  const weight = parseFloat(document.querySelector("#weight").value);
  const height = parseFloat(document.querySelector("#height").value);
  const result = document.querySelector("#result");

  if ( isNaN(weight) || weight < 0) {
    result.innerHTML = `Please Enter the Valid weight ${weight}`;
  } else if ( isNaN(height) || height < 0) {
    result.innerHTML = `Please Enter the Valid height ${height}`;
  }
  else{
    const bmi=((weight)/(height*height)).toFixed(2);

    if(bmi<18.6){
        result.innerHTML=`Under_weight with BMI : ${bmi}`
    }

    else if(bmi>24.9){
        result.innerHTML=`Over_weight with BMI : ${bmi}`
    }
    else{
        result.innerHTML=`Normal_weight with BMI : ${bmi}`
    }
  }
});
