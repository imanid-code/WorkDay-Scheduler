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
       // moment functioning 
       //.each a way to iterate over jquerry elements.every hour class set text to a time 9 as i increases by 1
    })
    console.log(currentTime);

    // var test = {...localStorage}
    // console.log(test)
    //write over and over for each time block. Change id as well 
    var localNine = localStorage.getItem('9am-todo');
    $("#0").val(localNine)
    console.log(localNine)
    var localTen = localStorage.getItem('10am-todo');
    $("#1").val(localTen)
    console.log(localTen)
    var localElleven = localStorage.getItem('11am-todo');
    $("#2").val(localElleven);
    console.log(localElleven);
    var localTwelve = localStorage.getItem('12pm-todo');
    $("#3").val(localTwelve);
    console.log(localTwelve);
    var localOne = localStorage.getItem('1pm-todo');
    $("#4").val(localOne);
    console.log(localOne);
    var localTwo = localStorage.getItem('2pm-todo');
    $("#5").val(localTwo);
    console.log(localTwo);
    var localThree = localStorage.getItem('3pm-todo');
    $("#6").val(localThree);
    console.log(localThree);
    var localFour = localStorage.getItem('4pm-todo');
    $("#7").val(localFour);
    console.log(localFour);
    var localFive = localStorage.getItem('5pm-todo');
    $("#8").val(localFive);
    console.log(localFive);
    
    //HourRow is the row where the hour is displayed. Where you add your 2-do
    //.each?
    //indexOf currentTime - goes through each time of the array
    //$(`#${i}`) - templete  literal , way to write java script inside of a string - back tics is the same a quote but allows for templete literal
    //  $(`#saveToDo-${i}`).prop('disabled', true); - i iterates whichever iteration we are on . prop manipulates a property inside element(id class value style)
   // add prop disabled and set to true 
    // $(`#saveToDo-${i}`).addClass('past');
    //$(`#hour-${i}`).addClass('past');
    // $('input, select, textarea').each(function() {
        //var value = $(this).val(),
        //name = $(this).attr('name');


    $('.HourRow').each(function(i) {
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