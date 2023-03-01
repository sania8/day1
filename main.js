// get all the star elements
const stars = document.querySelectorAll('.fa-star');

// add a click event listener to each star element
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
     // check if the clicked star is already yellow
     const isYellow = star.classList.contains('yellow');
    // turn all stars up to the clicked star yellow
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('yellow');
      
    }
    
    // turn all stars after the clicked star back to grey
    for (let i = index +1; i < stars.length; i++) {
      stars[i].classList.remove('yellow');
    }
    if(isYellow){
        star.classList.remove('yellow');    
     }
    
  });
});
//over code of styling stars
function tipCalculator() {
  var billAmount = document.getElementById("bill").value;
  var numberOfPeople = document.getElementById("numOfPeople").value;
  var serviceRate = document.querySelectorAll('.fa-star.checked').length;
  
  if (billAmount === "" ) {
      alert("Please enter required values!")
      return;
  }
  if (numOfPeople <= 0) {
    alert("Number of people should be greater than 0.");
    return;
  }
  if ( numberOfPeople === "" || numberOfPeople <=1) {
      numberOfPeople = 1;
  }

  var totalAmount = (billAmount ) / numberOfPeople;
  totalAmount = Math.round(totalAmount * 100) / 100;
  totalAmount = totalAmount.toFixed(2);

  document.getElementById("tip-container").style.display = "block";
  document.getElementById("tip").innerHTML = totalAmount;
}

document.getElementById("tip-container").style.display = "none";

document.getElementById("cal").onclick = function() {
  tipCalculator();
};
