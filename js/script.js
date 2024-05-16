window.onload =  function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        document.getElementById("navbar").classList.add("scrolled");
        document.getElementById("logo").src = "./images/logo (1).png";
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
        document.getElementById("logo").src = "./images/logo-inner.png";
    }
}


function changeButtonText() {
    var button = document.getElementById("myButton");
    var button2 = document.getElementById("myButton2");
    var button3 = document.getElementById("myButton3");
    var tooltipText = button.getAttribute("data-original-title");
    var tooltipText2 = button2.getAttribute("data-original-title");
    var tooltipText3 = button3.getAttribute("data-original-title");
    if (tooltipText === "Copy to clipboard!") {
        button.setAttribute("data-original-title", "Copied");
        $(button).tooltip('show');
    }
    else if(tooltipText2 === "Copy to clipboard!") {
        button2.setAttribute("data-original-title", "Copied");
        $(button2).tooltip('show');
    }
    else if(tooltipText3 === "Copy to clipboard!") {
        button3.setAttribute("data-original-title", "Copied");
        $(button3).tooltip('show');
    }

    window.alert("Text is copied!")
}




