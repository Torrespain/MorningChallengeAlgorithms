/*Write a function called "computePerimeterOfATriangle".

Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter.

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20

Starter Code :*/
function computePerimeterOfATriangle(side1, side2, side3) {
  const area = side1 + side2 + side3;
  return area;
}
var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20