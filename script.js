//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorIdInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');

changeButton.addEventListener('click', () => {
    const blockId = blockIdInput.value;
    const color = colorIdInput.value;

    // Reset all colors to transparent
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Set the color of the selected block
    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    }
});

resetButton.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
});
