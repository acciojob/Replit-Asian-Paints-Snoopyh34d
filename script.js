window.onload = function() {
  document.getElementById('change_button').addEventListener('click', 
  function(){
    var blockId = document.getElementById('block_id').value;
    var color = document.getElementById('colour_id').value;

    var blocks = document.getElementsByClassName('grid-item');
    for(var i = 0; i<blocks.length; i++){
      blocks[i].style.backgroundColor = 'transparent';
    }
    document.getElementById(blockId).style.backgroundColor = color;
  });

  document.getElementById('Reset').addEventListener('click', function(){
    var blocks = document.getElementsByClassName('grid-item');
    for(let i = 0; i < blocks.length; i++){
      blocks[i].style.backgroundColor = 'transparent';
    }
  });
}