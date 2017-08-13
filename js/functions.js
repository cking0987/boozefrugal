var inputVolume = document.getElementById("inputVolume");
var inputProof = document.getElementById("inputABV");
var inputPrice = document.getElementById("inputPrice");

//
/// Dropdown functionality- volume
$('#dropdown-trigger-volume').click(function(){
    $('#dropdown-content-volume').slideToggle(400);
    $(this).find('img').toggle();
});
/// Volume helper options
$('.input-option-vol').click(function(){
  var volHelper = $(this).data('ref');
  inputVolume.value = volHelper;
  ///toggle active image
    if ($(this).hasClass('inactive')) {
      $('#dropdown-content-volume .active').not(this).hide();
      $('#dropdown-content-volume .inactive').not(this).show();
      $(this).hide();
      $(this).parent().find('.active').css("display", "inline");
    };
});

//
/// Dropdown functionality- abv
$('#dropdown-trigger-abv').click(function(){
    $('#dropdown-content-abv').slideToggle(400);
    $(this).find('img').toggle();
});
/// ABV helper options
$('.input-option-abv').click(function(){
  var abvHelper = $(this).data('ref');
  inputABV.value = abvHelper;
  ///toggle active image
  if ($(this).hasClass('inactive')) {
    $('#dropdown-content-abv .active').not(this).hide();
    $('#dropdown-content-abv .inactive').not(this).show();
    $(this).hide();
    $(this).parent().find('.active').css("display", "inline");
  };
});

//
/// Calculate button
$('#dropdown-trigger-calc1').click(function(){
    if ( $.isNumeric(parseFloat(inputPrice.value)) && $.isNumeric(parseFloat(inputVolume.value)) && $.isNumeric(parseFloat(inputProof.value)) ) {
      //clear errors
      $('#errorMessage').html('');
      //dropdown
      if( !$('#dropdown-content-calc1').is(':visible') ) {
        $('#dropdown-content-calc1').slideToggle(400);
      };
      //show reset button
        $('#bfFormResetAll').show();
      //calculate ppb
      var ppbCurrent = ( parseFloat(inputPrice.value) / parseFloat(inputVolume.value) / parseFloat(inputProof.value) * 100 ).toFixed(2);
      console.log('just calculated ppb:' + ppbCurrent);
      //show ppb in case it was hidden by an error
      $('.ppbOutput').show();
      $('#ppbValue').html(ppbCurrent);
    } else {
      //hide ppb
      $('.ppbOutput').hide();
      //dropdown
      if( !$('#dropdown-content-calc1').is(':visible') ) {
        $('#dropdown-content-calc1').slideToggle(400);
      };
      //set error message
      $('#errorMessage').html('Hmm.... Something ain\'t quite right upstairs. Make sure each field has a valid number.');
      console.log('form validation failed');
    };
});

$('#bfFormResetAll').click(function(){
  inputVolume.value = '';
  inputABV.value = '';
  inputPrice.value = '';
  $('#ppbValue').html('');
  $('#errorMessage').html('');
  if( $('#dropdown-content-calc1').is(':visible') ) {
    $('#dropdown-content-calc1').slideToggle(400);
  };
  console.log('form has been reset');
});

//
/// Dropdown functionality- calc2
$('#dropdown-trigger-calc2').click(function(){
    $('#dropdown-content-calc2').slideToggle(400);
});
