const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorIdInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button');

// Change color functionality
changeButton.addEventListener('click', () => {
    const blockId = blockIdInput.value.trim();
    const color = colorIdInput.value.trim();

    // Reset all grid items to transparent
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the background color of the selected block
    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock && color) {
        selectedBlock.style.backgroundColor = color;
    } else {
        alert('Please enter a valid Block ID (1–9) and a color.');
    }
});

// Reset all grid items' background colors
resetButton.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
});
