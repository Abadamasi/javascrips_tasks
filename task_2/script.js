function js() {
    var num = document.getElementById("number").value;
    if (num % 2 == 0) {
        document.getElementById("result").innerHTML = num + " is even.";
    }
    else {
        document.getElementById("result").innerHTML = num + " is Odd";
    }
}