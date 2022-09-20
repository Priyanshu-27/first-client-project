// When click burger is down 

let slide_donw = document.getElementsByClassName("media_nav");
let hidden = document.getElementById("hidden");

slide_down = () => {
    if (slide_donw[0].style.display == "none") {
        slide_donw[0].style.display = "block"
        hidden.style.display = "none"
    }
    else {
        slide_donw[0].style.display = "none"
        hidden.style.display = "inline-block"
    }

}

cross_hide = () =>{
    if (slide_donw[0].style.display == "block"){
        slide_donw[0].style.display = "none"
        hidden.style.display = "block"
    }
    else {
        slide_donw[0].style.display = "flex"
        hidden.style.display = "none"
    }

}