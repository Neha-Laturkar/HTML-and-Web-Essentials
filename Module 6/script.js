
function myFunction() {
    alert ("I love my IT-Online Learning Teacher and he is amazing! ")
}

function headingchange() {
    document.getElementById("test").innerHTML=
    "This is the changed Heading now!!!";
}

function changeTag() {

    var heading = document.getElementById("heading");

    var newParagraph = document.createElement("p");

    newParagraph.textContent= 

    "This is a new paragraph created dynamically!!";

    heading.parentNode.replaceChild(newParagraph, heading);
}

function changeAttributes() {
    var image = document.getElementById ("myImage");
    image.src = "andrew-neel-0AwoTNSdwVM-unsplash.jpg";
    image.alt = "New Image";
    image.height = "500";
}

document.addEventListener("DOMContentLoaded", function() {
    var image2 = document.getElementById("myImage2");
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            image2.src = "pietro-de-grandi-6U4wogjLArk-unsplash.jpg";
        }
    });
});
