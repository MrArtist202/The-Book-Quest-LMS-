///////////////////////////////    NAVIGATION BAR    ////////////////////////////////////////
var circle = document.getElementById('circle');
circle.addEventListener("click", function () {
    document.getElementsByClassName('nav-small')[0].classList.add("nav-bar-Toggled");
});
var nav_btn = document.getElementsByClassName("nav-btn");
for (let i = 0; i < nav_btn.length; i++) {
    nav_btn[i].addEventListener("click", function () {
        document.getElementsByClassName('nav-small')[0].classList.remove("nav-bar-Toggled");
    });
}
///////////////////////////////    NAVIGATION BAR    ////////////////////////////////////////

///////////////////////////////   Repeating Elements //////////////////////////////////
var books=document.getElementById("books");
for(var i=0;i<2;i++){
    books.innerHTML+=(books.innerHTML);
}
///////////////////////////////   Repeating Elements //////////////////////////////////