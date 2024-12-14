
             


document.getElementById("toggleButton").onclick = function() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
document.getElementById('heartIcon').addEventListener('click', function() {
    this.classList.toggle('red');
});

