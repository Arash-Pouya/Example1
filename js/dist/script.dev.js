"use strict";

function Sum() {
  document.getElementById("exit").innerHTML = parseInt(document.getElementById("input1").value) + parseInt(document.getElementById("input2").value);
}

function difference() {
  var num1 = document.getElementById("input1").value;
  var num2 = document.getElementById("input2").value;
  document.getElementById("exit").innerHTML = num1 - num2;
}

function Product() {
  var num1 = document.getElementById("input1").value;
  var num2 = document.getElementById("input2").value;
  document.getElementById("exit").innerHTML = num1 * num2;
}