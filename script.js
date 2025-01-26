// Get the elements
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("reset_button");
const blockInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");
const gridItems = document.querySelectorAll(".grid-item");

// Add event listener to change the color of the specified block
changeButton.addEventListener("click", () => {
  const blockId = blockInput.value.trim(); // Get the block ID from input
  const color = colorInput.value.trim(); // Get the color from input

  if (blockId && color) {
    const block = document.getElementById(blockId); // Select the block by ID
    if (block) {
      block.style.backgroundColor = color; // Change its background color
    }
  }
});

// Add event listener to reset all grid items to their default color
resetButton.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.style.backgroundColor = ""; // Reset to default color
  });
});
