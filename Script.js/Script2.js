var contador = document.getElementById("count");
var decrement = document.getElementById("decrement");
var reset = document.getElementById("reset");
var increment = document.getElementById("increment");

var number = 0;

contador.innerText = number;

decrement.addEventListener("click", function () {
    number--;
    contador.innerText = number;
    MudarDecor(number)
});


increment.addEventListener("click", function () {
    number++;
    contador.innerText = number;
    MudarDecor(number)
})

reset.addEventListener("click", function () {
    number = 0
    contador.innerText = number
    MudarDecor(number)
})

function MudarDecor(number) {
    if (number > 0) {
        contador.style.color = "#0f0";
    } else if(number <= 0) {
        contador.style.color = "red";
    }
}

