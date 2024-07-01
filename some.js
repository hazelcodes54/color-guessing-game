
function generateRandomColor(num) {
  var arr = [];                         //creating an array to hold the random colors

  for(var i = 0; i < num; i++) {   //add num random of colors to array
    arr.push(randomColor());       //after we get the random color we gotta push it to the array
  }
  return arr;
}