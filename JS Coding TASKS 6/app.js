// Problem-1
let games = ["Circket","Football","Pubg","Cod","NFP"];
// Output
console.log(games[0]); //"Circket"
console.log(games[1]); //"Football"
console.log(games[2]); //"Pubg"
console.log(games[3]); //"Cod"
console.log(games[4]); //"NFP"

// Problem-2
let games = ["Circket","Football","Pubg","Cod","NFP"];
for (i =0; i < games.length; i ++){
    console.log("The index of "+ games[i] + " is " + i);
}
// Output
// The index of Circket is 0
// The index of Football is 1
// The index of Pubg is 2
// The index of Cod is 3
// The index of NFP is 4

// Problem-3
let games = ["Circket","Football","Pubg","Cod","NFP"];
console.log(games[0]);
// Output Circket
console.log(games[4]);
// Output NFP

// Problem-4
let games = ["Circket","Football","Pubg","Cod","NFP"];
console.log(games.length);
// Output 5

// Problem-5
let games = ["Circket","Football","Pubg","Cod","NFP"];
myString = games.toString();
console.log(myString);
// Output: Circket,Football,Pubg,Cod,NFP
console.log(typeof games);
// output: "string"

// Problem-6
let games = ["Circket","Football","Pubg","Cod","NFP"];
games.push("polo");
console.log(games);
// Output: ["Circket", "Football", "Pubg", "Cod", "NFP", "polo"]
games.unshift("polo");
console.log(games);
// Output: ["polo", "Circket", "Football", "Pubg", "Cod", "NFP", "polo"]
games.pop();
console.log(games);
// Output :["polo","Circket","Football","Pubg","Cod","NFP"];
games.shift();
// Output: ["Circket", "Football", "Pubg", "Cod", "NFP"]
games.splice(3,0,"Polo","Kabaddi");
console.log(games);
// Output: ["Circket", "Football", "Pubg", "Polo", "Kabaddi", "Cod", "NFP"]