// Problem_1
let cities ={
    first: "karachi",
    second: "Lahore",
    third: "Islamabad",
    fourth: "Quetta"
}
// Problem_2 AccessingObjects
console.log(cities.first);
console.log(cities.fourth);
// Output:
// karachi
// Quetta

// Problem_3 LoopingObjects
let cities ={
    first: "karachi",
    second: "Lahore",
    third: "Islamabad",
    fourth: "Quetta"
}
for(city in cities){
    console.log(cities[city]);
}
// Output:
// karachi
// Lahore
// Islamabad
// Quetta
