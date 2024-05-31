document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const newGridButton = document.getElementById('newGridButton');

    function createGrid(size) {
        container.innerHTML = ''; // Clear existing grid
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);

            // Add event listener for mouseenter event to leave a trail
            square.addEventListener('mouseenter', function () {
                square.style.backgroundColor = '#ccc'; // Change to any color you like
            });
        }
    }

    newGridButton.addEventListener('click', function () {
        let size = prompt('Enter the number of squares per side (maximum 100):');

        // Ensure input is a number and within the limit
        size = parseInt(size);
        if (isNaN(size) || size < 1 || size > 100) {
            alert('Invalid input. Please enter a number between 1 and 100.');
        } else {
            createGrid(size);
        }
    });

    // Create initial 16x16 grid
    createGrid(16);
});
