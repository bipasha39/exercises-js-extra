/*
    Change the names in the array by putting the first letter in UpperCase
    Use instruction 'for' to console.log each name
*/

const mcTeam = ["angelo","vincent","carlos","henriette"];

for (let i = 0; i < mcTeam.length; i++) {
    console.log(mcTeam[i][0].toUpperCase() + mcTeam[i].substring(1))
  }



//  for (  i = 0; i < 4; i++) {
//     console.log((mcTeam[i]).toUpperCase);
//  }

// const uppercased = mcTeam.map(name => name.toUpperCase());
// console.log(uppercased);



//YOUR CODE HERE


/*EXPECTED RESULT
>Angelo
>Vincent
>Carlos
>Henriette
*/