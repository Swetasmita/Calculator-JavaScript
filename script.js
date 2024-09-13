const display = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");
let inputText = "";

//Add event listener to all buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //console.log(e.target.innerHTML);
    let btnValue = e.target.innerHTML;

    //add a js eval function to calculate output
    if (btnValue === "=") {
        inputText = eval(inputText).toString();
        display.value = inputText;
       
    }
    //add a clear button functionality
    else if (btnValue === "AC") {
        inputText= "";
      display.value = inputText;
    }
    //add a delete button functionality to remove last char
    else if (btnValue === "DEL"){
        inputText = inputText.substring(0, inputText.length-1);
        display.value = inputText.toString();
    }
    // Append button values (numbers/operators) to inputText
     else {
      inputText += btnValue;
      display.value = inputText;
    }
  });
});
