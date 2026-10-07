// I use the same three photos in both stories.
let photo1 = "photo1.jpg";
let photo2 = "photo2.jpg";
let photo3 = "photo3.jpg";

let pathDescription = "A dirt path surrounded by green forest trees";
let benchDescription = "An empty wooden bench beside a lake";
let sunsetDescription = "An orange sunset reflected on a lake";

// These functions change the image, caption, and stage in each story.
function changeStoryOne(photo, description, caption, stage) {
    document.getElementById("imageOne").src = photo;
    document.getElementById("imageOne").alt = description;
    document.getElementById("captionOne").innerHTML = caption;
    document.getElementById("stageOne").innerHTML = stage;
}

function changeStoryTwo(photo, description, caption, stage) {
    document.getElementById("imageTwo").src = photo;
    document.getElementById("imageTwo").alt = description;
    document.getElementById("captionTwo").innerHTML = caption;
    document.getElementById("stageTwo").innerHTML = stage;
}

// Sequence 1: path, bench, sunset.
function beginningOne() {
    let caption = "I feel stressed, so I follow a quiet path away from my busy day.";
    changeStoryOne(photo1, pathDescription, caption, "Beginning / 1 of 3");
}

function middleOne() {
    let caption = "I find a bench by the water. I sit down, breathe, and slow down.";
    changeStoryOne(photo2, benchDescription, caption, "Middle / 2 of 3");
}

function endOne() {
    let caption = "I watch the sunset over the lake. My worries feel smaller, and I am ready to head home.";
    changeStoryOne(photo3, sunsetDescription, caption, "End / 3 of 3");
}

// Sequence 2: sunset, bench, path.
function beginningTwo() {
    let caption = "The sunset reminds me of the evenings I used to spend here with a friend.";
    changeStoryTwo(photo3, sunsetDescription, caption, "Beginning / 1 of 3");
}

function middleTwo() {
    let caption = "I return to our bench, but it is empty. This time, I have to sit here alone.";
    changeStoryTwo(photo2, benchDescription, caption, "Middle / 2 of 3");
}

function endTwo() {
    let caption = "On another day, I take the path forward. I can keep the memories and still begin a new chapter.";
    changeStoryTwo(photo1, pathDescription, caption, "End / 3 of 3");
}

// Clicking each button calls the matching function.
document.getElementById("beginningOne").addEventListener("click", beginningOne);
document.getElementById("middleOne").addEventListener("click", middleOne);
document.getElementById("endOne").addEventListener("click", endOne);

document.getElementById("beginningTwo").addEventListener("click", beginningTwo);
document.getElementById("middleTwo").addEventListener("click", middleTwo);
document.getElementById("endTwo").addEventListener("click", endTwo);
