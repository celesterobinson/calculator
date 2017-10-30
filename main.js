document.addEventListener('keydown', function(event) {
    if(event.keyCode === 49) {
        
    }
});

function displayNum(button) {
    var num = button.value;
    document.getElementById('display').innerHTML += num;
    document.getElementById('display').style.backgroundColor = 'beige';
}