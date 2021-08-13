//Calculate Tip
function calculateTip(){
    var billant = document.getElementById("billant").value
    var serviceQual = document.getElementById('serviceQual').value;
    var numOfPeople = document.getElementById('peoplent').value;


//validate input
if(billant === '' || serviceQual == 0){
    alert("PLease enter all values");
    return;
}

//check to see if this input is empty or less than or equal to one
if(numOfPeople === " " || numOfPeople <=1){
    numOfPeople = 1;
    document.getElementById('each').style.display="none";
}else { document.getElementById('each').style.display = "block";
}


// calculate tip
var total = (billant * serviceQual) / numOfPeople;
//round two decimal places
total = Math.round(total * 100 / 100);
//NEXT LINE ALLOWS US TO ALWAYS ADD TWO DIGITS AFTER DECIMAL POINT
total = total.toFixed(2);
//display the tip
document.getElementById("Totaltip").style.display = "block";
document.getElementById('tip').innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("Totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};
