let table = document.querySelector(".grid");
let btn = document.querySelector(".submit");
let color = document.querySelector("#color");
function clear() {
    table.innerHTML = "";
}
btn.addEventListener("click", function(e) {
    e.preventDefault();
    clear();
    makeGrid();
    styleColor();
});
function makeGrid() {
    for (var i = 1; i < document.querySelector("#height").value; i++) {
        var tr = document.createElement("tr");
        tr.id = "row";  
        table.appendChild(tr);

        for (var j = 1; j < document.querySelector("#width").value; j++) {
            var td = document.createElement("td");
            td.id = "cell";
            tr.appendChild(td);
        }
    }
}
function styleColor() {
    for (var i = 0; i < document.querySelectorAll("#cell").length; i++) {
        document.querySelectorAll("#cell")[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = color.value;
        });
    }
}
