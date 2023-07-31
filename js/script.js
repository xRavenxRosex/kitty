var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

//console.log(button);
//console.log(cat);

button.addEventListener("click", function () {
if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, purry fren! COME BACK PLZ <3";
    button.classList.add("disappear");
    //console.log("Yes")
} else {
    //console.log("No");
    cat.classList.add("show");
    button.innerText = "Hey, look over there! There's some catnip";
    button.classList.remove("disappear");
}});