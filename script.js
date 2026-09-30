// Lab 3: Photo Carousel
// Class Progress

let firstText = "I will add Photo 1 here.";
let secondText = "I will add Photo 2 here.";
let thirdText = "I will add Photo 3 here.";

let firstCaption = "Beginning: I am still deciding my final story.";
let secondCaption = "Middle: This will be the second part of my story.";
let thirdCaption = "End: This will be the ending of my story.";

function showFirstPhoto() {
    document.getElementById("photoText").innerHTML = firstText;
    document.getElementById("storyCaption").innerHTML = firstCaption;
}

function showSecondPhoto() {
    document.getElementById("photoText").innerHTML = secondText;
    document.getElementById("storyCaption").innerHTML = secondCaption;
}

function showThirdPhoto() {
    document.getElementById("photoText").innerHTML = thirdText;
    document.getElementById("storyCaption").innerHTML = thirdCaption;
}

document.getElementById("firstButton").addEventListener("click", showFirstPhoto);
document.getElementById("secondButton").addEventListener("click", showSecondPhoto);
document.getElementById("thirdButton").addEventListener("click", showThirdPhoto);

// I will add my images and finish Sequence 2 later.
