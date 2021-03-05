function Sum() {
    document.getElementById("exit").innerHTML = parseInt(document.getElementById("input1").value) + parseInt(document.getElementById("input2").value);
}

function difference() {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    document.getElementById("exit").innerHTML = num1 - num2;
}

function Product() {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    document.getElementById("exit").innerHTML = num1 * num2;
}

function user(name = document.getElementById("input3").value) {
    if (name.length > 1) {
        alert(name + " " + "welcome");
    } else {
        alert("please enter your name");
    }

}