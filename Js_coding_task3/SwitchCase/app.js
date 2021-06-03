var percentange = prompt("Enter the perctange");   
switch(true){  
case percentange > 85:  
console.log("A+ Grade");  
break;  
case percentange <=85 && percentange> 80:  
console.log("A Grade");  
break;  
case percentange <=80 && percentange > 70:  
console.log("B+ Grade");  
break;  
case percentange<=70 && percentange >60:  
console.log("B Grade");  
break;  
case percentange <=60 && percentange > 40:  
console.log("C Grade");  
break;
case percentange <= 40 && percentange > 35:  
console.log("D Grade");  
break;
case percentange <=35:
console.log("candidate failed");
break;
default:  
console.log("please enter correct marks");  
}