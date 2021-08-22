
// for loop counts to 24 and appends html for each input field with slight modifications based on their assigned hour
// result is a list of entries classed and displaying their time 
for (var i = 1; i < 25; i++) {
    var hour = i;
    if (hour == 24) {
        hour = "12AM";
    }
    else if (hour == 12) {
        hour = hour + "PM"
    }
    else if (hour > 12) {
        hour = hour - 12
        hour = hour + "PM"
    }
    else {
        hour = hour + "AM";
    };
    // var eachLine = $("div");
    //     eachLine.html(
    // '<div class="input-group mb-3"> <span class="input-group-text" id="addon-wrapping">1AM</span> <input type="text" class="form-control" placeholder="Recipient username" aria-label="Recipient username" aria-describedby="button-addon2"> <button class="btn btn-outline-secondary saveBtn" type="button" id="button-addon2">Button</button></div>'
    //     );
    $(".container").append('<div class="input-group mb-3 ' + hour + '" > <span class="input-group-text" id="addon-wrapping">' + hour + '</span> <input type="text" class="form-control '+ hour +'" placeholder="Recipient username" aria-label="Recipient username" aria-describedby="button-addon2"> <button class="btn btn-outline-secondary saveBtn '+ hour +'" type="button" id="button-addon2">Button</button></div>');
}
//--on click run everything below
// $("button").on("click", function(){}
//-- hourClick, at each interval, will spit out the same thing as hour at each of
//-- its intervals, meaning we will check for each hour class 
// for (var C = 0; C<25; C++){
// var hourClick = C
// if (hourClick == 24) {
//     hourClick = "12 AM";
// }
// else if (hourClick == 12) {
//     hourClick = hourClick + "PM"
// }
// else if (hourClick > 12) {
//     hourClick = hourClick - 12
//     hourClick = hourClick + "PM"
// }
// else {
//     hourClick = hourClick + "AM";
// };
//-- Now see if the target has a class = to hourClick
// if (event.target === $("btn."+ hourClick)){
// setlocalStorage("savedContent"+hourClick, $(input.hourClick))
//  }
//}