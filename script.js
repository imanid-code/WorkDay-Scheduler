$(document).ready(function(){
    /* Display the current day of the week and date
    at the top of the page */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
    var timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
    var currentTime = moment().format("h A");
    
    
    // Set each span text to the correct hour between 9am and 5pm
    $(".Hour").each(function(i){
        $(this).text(moment().hour(i+9).format("h A"))
       //? Where is the 9 coming from .. is it because of the length of the array?
    })
    console.log(currentTime);
    
    
    //HourRow is the row where the hour is displayed. Where you add your 2-do
    //.each?
    //indexOf currentTime - goes through each time of the array
    //$(`#${i}`)
    //  $(`#saveToDo-${i}`).prop('disabled', true);
   // $(`#saveToDo-${i}`).addClass('past');
    //$(`#hour-${i}`).addClass('past');
    // $('input, select, textarea').each(function() {
        //var value = $(this).val(),
        //name = $(this).attr('name');


    $('.HourRow').each(function(i) {
        console.log(timeArray.indexOf(currentTime));
        if (timeArray.indexOf(currentTime) > i) {
          $(`#${i}`).addClass('past');
          $(`#saveToDo-${i}`).prop('disabled', true);
          $(`#saveToDo-${i}`).addClass('past');
          $(`#hour-${i}`).addClass('past');
        } else if (timeArray.indexOf(currentTime) == i) {
          $(`#${i}`).addClass('present');
          $(`#saveToDo-${i}`).addClass('present');
          $(`#saveToDo-${i}`).prop('disabled', false);
          $(`#hour-${i}`).addClass('present');
        } else if (timeArray.indexOf(currentTime) < i) {
          $(`#${i}`).addClass('future');
          $(`#saveToDo-${i}`).addClass('future');
          $(`#saveToDo-${i}`).prop('disabled', false);
          $(`#hour-${i}`).addClass('future');
        }
      });
    
    });
      
      $("button").on("click", function(event){
        event.preventDefault ()
          $('input, select, textarea').each(function() {
           var value = $(this).val(),
               name = $(this).attr('name');
           localStorage[name] = value;
                   
      })});