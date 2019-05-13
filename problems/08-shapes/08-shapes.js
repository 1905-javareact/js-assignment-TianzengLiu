/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {

  let line ="";

  switch (shape) {
    case "Square": 
    for (let j = 0; j < height; j++) {
      line += character;
    }
    for (let i = 0; i < height; i++) {
      console.log(line); 
    }
    break;

    case "Triangle":
    for (let i = 0; i < height; i++) {
      line += character;
      console.log(line);
    }
    break;

    case "Diamond":
    //Print top half Diamond
    for (let i = 1; i <= height/2; i++) {//Print the space for each row
      for (let j = 1; j <= height - i; j++) {
        line += " ";
      }
      for (let j = 1; j <= 2 * i - 1; j++) {// Print * for each row
       line += "*";
      }
      line += "\n";
    }
    //Print bottom half Diamond
    for (let i = height - 2; i >= 1; i--) {//Print the space for each row
      for (let j = 1; j <= height - i; j++) {
        line += " ";
      }
      for (let j = 1; j <= 2 * i - 1; j++) {// Print * for each row
        line += "*";
      }
      line += "\n";
    }
    console.log(line);
    break;

    default: 
    console.log("Ooops, wrong input. Please try again!");
  }

}

//Test
printShape("Square", 3, "%");
printShape("Triangle", 3, "$");
printShape("Diamond", 5, "*");
printShape("Line", 5, "*");