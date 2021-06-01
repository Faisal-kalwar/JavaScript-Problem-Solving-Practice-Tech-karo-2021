function increase(){
    // Aceess input element
    var textBox = document.getElementById("text");
    // Convert input to string
    let inputValue = parseInt(textBox.value);
    // input value increment by 5
    inputValue += 5;
    //Aceess span element 
    var headingElement = document.querySelector('h1 > span');
    headingElement.innerHTML = inputValue;
}         