seatAssign = (passengers,seats) => {
  let passengersArr = passengers.split(" ");
  let seatsArr = seats.split("");
  console.log(passengersArr)
  console.log(seatsArr);
  const totalPassengers= parseInt(passengersArr[0]);
  let programmers = parseInt(passengersArr[1]);
  let athletes = parseInt(passengersArr[2]);
  console.log("total passengers: ",passengersArr[0]); 
  console.log("programmers: ",programmers);
  console.log("athletes: ",athletes);

  let studentNumber = 0;

  if (totalPassengers != seatsArr.length){
      return ("The total passengers and the total seats have to match")
  }

  else {
      for (let i=0; i<seatsArr.length; i++) {
          if (seatsArr[i]!="*") {
              if ((programmers>0 && seatsArr[i-1]!="A") && (programmers >= athletes)) {
                seatsArr[i]="A";
                programmers--;
                studentNumber++;
              }
              else if (athletes>0 && seatsArr[i-1]!="B" && athletes >= programmers) {
                seatsArr[i]="B";
                athletes--;
                studentNumber++;
              }
              else {
                  if (programmers>0 && seatsArr[i-1]!="A") {
                    seatsArr[i]="A";
                    programmers--;
                    studentNumber++;
                  }
                  else if (athletes>0 && seatsArr[i-1]!="B") {
                    seatsArr[i]="B";
                    athletes--;
                    studentNumber++;
                  }
              }
          }
      }
  }
  console.log(seatsArr);
  return studentNumber; 
}


console.log(seatAssign("11 3 10", ".*....**.*."));