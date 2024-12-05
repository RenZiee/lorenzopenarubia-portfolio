window.addEventListener('load', () => {
    const bgMusic = new Audio('PS4 BG MUSIC.wav'); // Path to your audio file
    bgMusic.loop = true;

    // Attempt to play the music on page load
    bgMusic.play().catch((err) => {
        console.log("Background music failed to play:", err);
    });
});
