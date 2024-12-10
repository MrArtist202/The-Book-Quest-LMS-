///////////////////////////////    NAVIGATION BAR    ////////////////////////////////////////
var circle=document.getElementById('circle');
circle.addEventListener("click",function(){
        document.getElementsByClassName('nav-small')[0].classList.add("nav-bar-Toggled");
});
var nav_btn=document.getElementsByClassName("nav-btn");
for(let i=0;i<nav_btn.length;i++){
    nav_btn[i].addEventListener("click",function(){
        document.getElementsByClassName('nav-small')[0].classList.remove("nav-bar-Toggled");
    });
}
///////////////////////////////    NAVIGATION BAR    ////////////////////////////////////////

//////////////////////////////    Night Mode ////////////////////////////
var n = 0;
var c = document.getElementById("circl");
var b = document.getElementsByTagName("body")[0];
var contact_heading = document.getElementById("contact-heading");
var icon = document.getElementsByClassName("icon");
var c_type = document.getElementsByClassName("c-type");
var mssg = document.getElementById("mssg");
var card = document.getElementsByClassName("card");
var category = document.getElementById("categories");
var contact_heading = document.getElementById("contact-heading");
var contact_text = document.getElementsByClassName("contact_info");
var card_content = document.getElementsByClassName("card-content");
function move() {
    if (n % 2 == 0) {
        c.style.transition = "all 0.3s"
        c.style.marginLeft = "67%";
        c.style.backgroundColor="grey";
        c.style.color="white";
        contact_heading.style.color ="#ffffffa8";
        b.style.transition = "all 0.3s"
        b.style.backgroundColor = "#181818";
        for(var i=0;i<icon.length;i++){
            icon[i].style.color ="#ffffffa8";
            c_type[i].style.color = "#ffffffa8";
        }
        for (var i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            card_content[i].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            card_content[i].style.color="white";
        }
        for (var i = 0; i < contact_text.length; i++) {
            contact_text[i].style.color = "#ffffffa8";
        }
        category.style.background ='#3d3d3d';
        mssg.style.color="#ff00a5";
        n += 1
    } else {
        for (var i = 0; i < icon.length; i++) {
            icon[i].style.color = "white";
            c_type[i].style.color = "white";
        }
        for (var i = 0; i < card.length; i++) {
            card[i].style.backgroundColor = "rgb(255,255,255)";
            card_content[i].style.backgroundColor = "white";
            card_content[i].style.color="black";
        }
        category.style.backgroundImage = 'linear-gradient(to right top,#3d3d3d 50%,#ffb852 50%)';
        c.style.backgroundColor="#ffb852";
        c.style.color="black";
        contact_heading.style.color = "rgba(1, 88, 110, 0.952)";
        c.style.transition = "all 0.3s"
        c.style.marginLeft = "1px";
        c.style.marginTop = "1px";
        b.style.transition = "all 0.3s"
        for (var i = 0; i < contact_text.length; i++) {
            contact_text[i].style.color = "rgb(6 7 0 / 41%)";
        }
        b.style.backgroundColor = "white";
        mssg.style.color="#9e006fbf";
        n += 1
    }
};
//////////////////////////////    Night Mode ////////////////////////////
