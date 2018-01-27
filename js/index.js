// document.getElementById  method grabs elements from the DOM that have the matching Id.
var list1 = document.getElementById("idTag");
// the console.log is populating the element selected above and logs to the console.
console.log(list1);

// document.getElementsByClassName method grabs elements from the DOM that have the matching class name.
var list2 = document.getElementsByClassName("className");
// the console.log is populating the element selected above and logs to the console.
console.log(list2);

// document.getElementsByTagName method grabs elements from the DOM that have the matching Key or Tags.
var list3 = document.getElementsByTagName("li");
// the console.log is populating the element selected above and logs to the console.
console.log(list3);

// document.querySelector method grabs the first element from the DOM that have the matching css selector.(id, class, elements,etc)
var qSelect = document.querySelector("#idTag");
// the console.log is populating the element selected above and logs to the console.
console.log(qSelect);

// this line is a repeat of the method above^^^^^^^^^^^^^^^^^^
var qSelect1 = document.querySelector(".className");
// the console.log is populating the element selected above and logs to the console.
console.log(qSelect1);


// document.querySelector method grabs all elements from the DOM that have the matching css selector.(id, class, elements,etc)
var qSelect2 = document.querySelectorAll(".className");
// the console.log is populating the element selected above and logs to the console.
console.log(qSelect2);
// the second console.log is telling me how long the node list is
console.log(qSelect2.length);
