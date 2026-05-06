const modal = document.getElementById("artModal");
const dynamicText = document.getElementById("dynamic-text");
const closeBtn = document.querySelector(".close-button");
const clickableItems = document.querySelectorAll(".clickable");

// An array of "constantly changing" phrases
const phrases = [
    "Exploring the digital void...",
    "Textures of a glitching reality.",
    "A moment frozen in Garamond.",
    "The intersection of classic and chaos.",
    "Reimagining the canvas.",
    "Searching for symmetry in pixels."
];

let textInterval;

// Function to start changing text
function startTextRotation() {
    textInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        dynamicText.innerText = phrases[randomIndex];
    }, 2000); // Changes every 2000ms (2 seconds)
}

// Open modal on click
clickableItems.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
        startTextRotation();
    });
});

// Close modal
closeBtn.onclick = () => {
    modal.style.display = "none";
    clearInterval(textInterval); // Stop changing text when closed
};

// Close if user clicks outside the box
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        clearInterval(textInterval);
    }
};
