// Function to randomly position the Boo Ghosts within the page
function positionBooGhosts() {
    const ghosts = document.querySelectorAll(".boo-ghost");
    const bodyWidth = document.body.clientWidth; // Total width of the viewport
    const bodyHeight = document.body.clientHeight; // Total height of the viewport

    ghosts.forEach(ghost => {
        const randomX = Math.random() * (bodyWidth - 120); // Random X within bounds (subtract width of the ghost)
        const randomY = Math.random() * (bodyHeight - 120); // Random Y within bounds (subtract height of the ghost)
        ghost.style.left = `${randomX}px`;
        ghost.style.top = `${randomY}px`;
    });
}

// Reposition ghosts on page load and window resize
window.addEventListener("load", positionBooGhosts);
window.addEventListener("resize", positionBooGhosts);
