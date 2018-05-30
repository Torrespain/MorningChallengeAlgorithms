/*Write a function called "computePerimeterOfACircle".

Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.

var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345

Starter Code :*/
function computePerimeterOfACircle(radius) {
  const area = 2 * Math.PI * radius;
  return area;
}

var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345