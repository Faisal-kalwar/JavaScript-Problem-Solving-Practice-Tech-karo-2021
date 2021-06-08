let agesArray = [12, 45, 56 , 4];
agesArray.map((age, index) => {
    console.log("This is index " +index + " and age " + age);
});
// Output:
// This is index 0 and age 12
// This is index 1 and age 45
// This is index 2 and age 56
// This is index 3 and age 4
let newAges = agesArray.map(items => items * 10);
console.log(newAges);
// Output: 
// [120, 450, 560, 40]

let userData = [
    {
        name:'Saeed',
        lastName: 'Ahmad',
        school: 'UoT',
        profession: 'engineer'
    },
    {
        name:'Ali',
        lastName: 'Khan',
        school: 'Tum',
        profession:'researcher'
    }
];
userData.map(function(value){
    console.log(value);
});