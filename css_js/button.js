document.addEventListener('DOMContentLoaded', function() {
    const buttonWrapper = document.querySelector('.button-wrapper');
    const button = document.querySelector('.button_not_love');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    buttonWrapper.addEventListener('mouseenter', function() {
        const containerRect = buttonWrapper.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const margin = 150; 
        const maxX = containerRect.width - buttonRect.width - margin * 2;
        const maxY = containerRect.height - buttonRect.height - margin * 2;

        const newX = getRandomInt(-maxX / 3, maxX + maxX / 3);
        const newY = getRandomInt(-maxY / 3, maxY + maxY / 3);

        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    });
});
