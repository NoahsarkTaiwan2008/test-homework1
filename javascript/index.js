var password = 1234;
var input;

for (let i =1; i <= 5; i++) {
    input = prompt("input password" + i);
    if (i == 5 && input != password) {
        alert("error.");
    } else {
        alert("login.");
    }
}
