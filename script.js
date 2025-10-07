/* ---------- Part 2: JavaScript Functions ---------- */

// Global variable
let animationCount = 0;

// Function with parameters and return value
function changeBoxColor(element, color) {
    element.style.backgroundColor = color;
    return `Box color changed to ${color}`;
}

// Function demonstrating local vs global scope
function incrementAnimationCount() {
    let localMessage = "Animation triggered!";
    animationCount++; // modifies global variable
    console.log(localMessage, "Total animations:", animationCount);
}

// Reusable function to trigger CSS animation
function triggerAnimation(element) {
    // Remove class if it already exists (so it can re-trigger)
    element.classList.remove("animate");

    // Reflow trick to restart the animation
    void element.offsetWidth;

    // Add the animation class
    element.classList.add("animate");

    // Change box color dynamically
    const colors = ["#ff6600", "#28a745", "#17a2b8", "#dc3545"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(changeBoxColor(element, randomColor));

    // Update animation count
    incrementAnimationCount();
}
