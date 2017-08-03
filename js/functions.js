var inputVolume = document.getElementById("inputVolume");
var inputProof = document.getElementById("inputProof");
var inputPrice = document.getElementById("inputPrice");
var dankFactorButton = document.getElementById("dankFactorButton");
var dankFactorOutput = document.getElementById("dankFactorOutput");
var dankFactorBar = document.getElementById("dankFactorBar");


//
/// Calculate DF
dankFactorButton.onclick = function() {
  var dankFactorExtended = parseFloat(inputPrice.value) / parseFloat(inputVolume.value) / parseFloat(inputProof.value) * 634.51776 - 3;
  dankFactorOutput.innerHTML = dankFactorExtended.toFixed(2);
  document.getElementById("dankFactorOutputContainer").style.display = "block";
  dankFactorBar.style.width = dankFactorExtended.toFixed(2) + "%";
  if (dankFactorExtended <= 33) {
    dankFactorBar.className = 'progress-bar progress-bar-striped progress-bar-success';
    } else if (dankFactorExtended <= 66){
    dankFactorBar.className = 'progress-bar progress-bar-striped progress-bar-warning';
    } else {
    dankFactorBar.className = 'progress-bar progress-bar-striped progress-bar-danger';
  }
};

//
/// Reset Form
document.getElementById("resetAll").onclick = function() {
  document.getElementById("dankFactorOutputContainer").style.display = "none";
  dankFactorBar.className = 'progress-bar progress-bar-striped';
  inputVolume.value = 'Volume';
  inputProof.value = 'Percent Alcohol';
  inputPrice.value = 'Price';
};

//
/// Dropdown functionality
$('#dropdown-trigger-volume').click(function(){
    $('#dropdown-content-volume').slideToggle(400);
});

//
/// Volume helpers
$('#volume-helper-wineBottle').click(function(){
    inputVolume.value = '25';
});
$('#volume-helper-beerBottle').click(function(){
    inputVolume.value = '12';
});
$('#volume-helper-12Pack').click(function(){
    inputVolume.value = '144';
});
