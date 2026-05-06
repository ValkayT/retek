const modal = document.getElementById("artModal");
const dynamicText = document.getElementById("dynamic-text");
const closeBtn = document.querySelector(".close-button");
const clickableItems = document.querySelectorAll(".clickable");


const phrases = [
    "Exploring the digital void...",
    "Textures of a glitching reality.",
    "A moment frozen in Garamond.",
    "The intersection of classic and chaos.",
    "Reimagining the canvas.",
    "Searching for symmetry in pixels."
];

let textInterval;

t
function startTextRotation() {
    textInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        dynamicText.innerText = phrases[randomIndex];
    }, 2000);
}


clickableItems.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
        startTextRotation();
    });
});


closeBtn.onclick = () => {
    modal.style.display = "none";
    clearInterval(textInterval);
};


window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        clearInterval(textInterval);
    }
};
