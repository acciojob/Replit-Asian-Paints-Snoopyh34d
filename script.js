// Select required elements
const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorIdInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');

// Change color function
changeButton.addEventListener('click', () => {
    const blockId = blockIdInput.value.trim(); // Get block ID
    const color = colorIdInput.value.trim(); // Get color

    // Reset all grid items to transparent
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change color of selected block
    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock && color) {
        selectedBlock.style.backgroundColor = color;
    } else {
        alert("Please enter a valid Block ID and Color.");
    }
});

// Reset all colors to transparent
resetButton.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
});
