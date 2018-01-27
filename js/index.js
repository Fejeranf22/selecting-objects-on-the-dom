var list1 = document.getElementById("idTag");
console.log(list1);

var list2 = document.getElementsByClassName("className");
console.log(list2);

var list3 = document.getElementsByTagName("li");
console.log(list3);

var qSelect = document.querySelector("#idTag");
console.log(qSelect);

var qSelect1 = document.querySelector(".className");
console.log(qSelect1);


var qSelect2 = document.querySelectorAll(".className");
console.log(qSelect2);
console.log(qSelect2.length);
