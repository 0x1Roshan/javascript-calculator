
var inputEntry = document.getElementById('inputEntry');

function pushEntry(object) {
    var pushed = object.innerHTML;
    
    if (pushed == 'AC') {
        inputEntry.innerHTML = '0';
    } else if (pushed == '=') {
        inputEntry.innerHTML = eval(inputEntry.innerHTML);
    } else {
        if (inputEntry.innerHTML == '0') {
            inputEntry.innerHTML = pushed;
        } else {
            inputEntry.innerHTML += pushed;
        }
    }
}
