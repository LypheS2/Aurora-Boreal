// app.js
document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('reveal-button');
    const hiddenMessage = document.getElementById('hidden-message');

    revealButton.addEventListener('click', () => {
        hiddenMessage.classList.remove('hidden');
        revealButton.disabled = true;
        revealButton.textContent = 'Message Revealed!';
    });
});