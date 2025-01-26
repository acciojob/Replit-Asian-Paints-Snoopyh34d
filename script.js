document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");
    const blockIdInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");
    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");

    // Reset all grid item background colors to transparent
    const resetGridColors = () => {
        gridItems.forEach(item => {
            item.style.backgroundColor = "transparent";
        });
    };

    // Change color of a specific grid item
    changeButton.addEventListener("click", () => {
        const blockId = blockIdInput.value.trim();
        const color = colorInput.value.trim();

        // Reset all grid colors before applying the new one
        resetGridColors();

        // Validate and apply color to the specified block
        const targetBlock = document.getElementById(blockId);
        if (targetBlock) {
            targetBlock.style.backgroundColor = color;
        } else {
            alert("Invalid block ID!");
        }
    });

    // Reset button functionality
    resetButton.addEventListener("click", () => {
        resetGridColors();
    });
});
