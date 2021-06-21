let studentsNames = ['Faisal','Abida','Arslan','Hamza'];
console.log(studentsNames);
// output
// (4) ["Faisal", "Abida", "Arslan", "Hamza"]
// 0: "Faisal"
// 1: "Abida"
// 2: "Arslan"
// 3: "Hamza"
// length: 4
let studentNames = ['Faisal','Abida','Arslan','Hamza'];
console.log(studentNames.toString());
// Output:  Faisal,Abida,Arslan,Hamza

// 2
let studentsNames = ['Faisal','Abida','Arslan','Hamza'];
studentsNames.pop();
console.log(studentsNames);
//Output: ["Faisal", "Abida", "Arslan"]
studentsNames.push("Maam Sabhat");
console.log(studentsNames);
// output: ["Faisal", "Abida", "Arslan", "Maam Sabhat"]
studentsNames.unshift("Maam Tuba");
console.log(studentsNames);
// Output:["Maam Tuba", "Faisal", "Abida", "Arslan", "Maam Sabhat"]
studentsNames.shift();
console.log(studentsNames);
//Output: ["Faisal", "Abida", "Arslan", "Maam Sabhat"]

// 3
let arr =  ['Using','splice','method','for','the','first','time']
arr.splice(1,1,'array');
arr.splice(5,1,'second')
console.log(arr)
// Output: ["Using", "array", "method", "for", "the", "second", "time"]
