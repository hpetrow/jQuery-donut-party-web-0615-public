$(function(){
  var donutCounter = new DonutCounter();
});

// your code here

function DonutCounter() {
  var donuts = 0;
  var guests = 0;

  $('#guests > button.add').click(function() {
    guests += 1;
    $('#guests > h3 > span').text(guests);
  });

  $('#guests > button.remove').click(function() {
    if (guests > 0) {
      guests -= 1;
      $('#guests > h3 > span').text(guests);
    }
  });

  $('#donuts > button.add').click(function() {
    donuts += 1;
    $('#donuts > h3 > span').text(donuts);
  });

  $('#donuts > button.remove').click(function() {
    if (donuts > 0) {
      donuts -= 1;
      $('#donuts > h3 > span').text(donuts);
    }
  });

  $('#check > button').click(function() {
    if (donuts < guests) {
      $('#status').text('Guests are sad :(');
    }
    else if (guests === 0) {
      $('#status').text('Invite someone you jerk!');
    }
    else if (donuts/guests > 4) {
      $('#status').text('ARE YOU TRYING TO KILL US ALL!?');
    }
    else {
      $('#status').text('Guests are having a blast!');
    }
  });
}
