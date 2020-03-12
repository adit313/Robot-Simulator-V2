document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  const movesContainer = document.getElementById("moves-container")
  const moveBtn = document.getElementById("move-button")
  let movesArray =[]

  document.addEventListener("keyup", delete_was_pressed);
  moveBtn.addEventListener("click", execute_moves);

  function delete_was_pressed(event) {
    let key_direction
    console.log(event.key)


    switch (event.key) {      
      case "ArrowUp":
        key_direction = "up"
        break;
      case "ArrowDown":
        key_direction = "down"
        break;
      case "ArrowLeft":
        key_direction = "left"
        break;
      case "ArrowRight":
        key_direction = "right"
        break;
      case "Backspace":
        key_direction = "delete"
        console.log("delete")
        movesArray.pop()
        movesContainer.children.item(movesArray.length).remove()
        return;
      default:
        break;
    }
    let new_event = document.createElement("LI")
    new_event.innerText = key_direction
    movesContainer.append(new_event)
    movesArray.push(key_direction)
    }

  function execute_moves(event) {
    console.log("moves")
    movesArray.forEach(element => {
      setTimeout(function() {
        move(element);
    }, 500);
    });
  }

  // ADD CODE HERE!
})



// switch (event.key) {
//   case "w":
//     move("up");
//     key_direction = "up"
//     break;
//   case "s":
//     move("down");
//     key_direction = "down"
//     break;
//   case "a":
//     move("left");
//     key_direction = "left"
//     break;
//   case "d":
//     move("right");
//     key_direction = "right"
//     break;
//   default:
//     break;
