/*Write a function called "computeTripledAreaOfARectangle".

Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24

Starter Code :*/
function computeTripledAreaOfARectangle(length, width) {
  let area = length*width;
  return (area*3);
}
var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24