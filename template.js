function openNav() {
    document.getElementById("sidepanel").style.width = "450px";
    document.getElementById("sidepanel").classList.remove("row");
    // document.body.style.background = "rgba(0, 0, 0, 0.2)";

}

function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
}

/* $("button.openbtn").click(function() {
    $("#sidepanel").css("width", "450px");
});

$("a.closebtn").click(function() {
    $("#sidepanel").css("width", "0");
}); */