function dropdownMenu() {
        console.log("Entered dropdown menu function");
        var x = document.getElementById("dropdownClick");
        if (x.className == "navbarMobile") {
            x.className += " responsive";
            console.log("changed the class to responsive");
        } else {
            console.log("removed the class");
            x.className = "navbarMobile";
        }
    }

//get modal elements
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-display");
var modalCaption = document.getElementById("captionID");

//grab all pictures
//var imagesContainer = document.getElementsByClassName("pictureContainer");
//for(let i=0; i<imagesContainer.length; i++){
//    for(let z=0; z<imagesContainer[i].children.length; z++){
//        var img = imagesContainer[i].children[z];
//        img.onclick = displayModal(img.src, img.alt);
//    }
//}

//display the modal
function displayModal(picID){
    var source = document.getElementById(picID).src;
    var caption = document.getElementById(picID).alt;
    modal.style.display = "block";
    var modalCaption = document.getElementById("captionID");
    modalImg.src = source;
    modalCaption.innerHTML = caption;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal.style.display = "none";
}

var scrollSpan = document.getElementById("myModal");
scrollSpan.onclick = function(){
    modal.style.display = "none";
}





















