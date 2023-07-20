




var momentEl = $('#date')
var saveButtonEl = $('#saveBtn');
var timeblockEl = $('#time-block');
var hourEl = $('#hour');
var pastEl = $('#past');
var presentEl = $('#present');
var futureEl = $('#future');
var dateDisplayEl = $('#date-container');
var elements = $(".time-block");
var nineAmEl = $("hour-9")













var currentTime = moment().hours();
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);
  if (timeBlock < currentTime) {
    $(this).addClass("past");
  } else if (timeBlock === currentTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
$("#hour-6 .description").val(localStorage.getItem("hour-6"));
$("#hour-7 .description").val(localStorage.getItem("hour-7"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));




$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});

$(document).ready(function () {
  if (localStorage["hour-9"] !== null && localStorage["hour-9"] !== undefined) {
    var nineAm = $("<p>" + localStorage["hour-9"] + "</p>");
    $("#hour-9").append(nineAm[0].innerText);
  } else {
    ("");
  }






