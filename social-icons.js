// Get the audio elements for hover and click sounds
const hoverSound = document.getElementById('hoverSound');
const clickSound = document.getElementById('clickSound');

// Load the sounds
hoverSound.load();
clickSound.load();

// Function to play sound
function playSound(audio) {
    if (audio.paused || audio.ended) {
        audio.currentTime = 0;  // Reset audio time to the start
        audio.play();
    }
}

// Handle hover sounds for social icons
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        playSound(hoverSound);  // Play hover sound for social icons
    });
    
    // Play click sound on click without affecting hover sound
    icon.addEventListener('click', () => {
        playSound(clickSound);  // Play click sound for social icons
    });
});
