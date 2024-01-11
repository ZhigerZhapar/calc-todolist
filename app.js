const show = document.querySelector("#calculator__input");
const clear = document.querySelector(".op1");
const result = document.querySelector(".result");
const inputS = document.querySelector(".todoinput");
const todobutton = document.querySelector(".todobutton");
const todoList = document.querySelector(".todolistD");

function add(input) {
  show.value += input;
}
clear.addEventListener("click", () => {
  show.value = "";
});
result.addEventListener("click", () => {
        const inputValue = show.value;
        let operator;
        let firstNumber;
        let secondNumber;
        if (inputValue.includes("+")) {
          operator = "+";
        } else if (inputValue.includes("-")) {
          operator = "-";
        } else if (inputValue.includes("*")) {
          operator = "*";
        } else if (inputValue.includes("/")) {
          operator = "/";
        }
        else{
            show.value = "Error";
        }
        const numbers = inputValue.split(operator);
        if (numbers.length !== 2 || isNaN(parseFloat(numbers[0])) || isNaN(parseFloat(numbers[1]))) {
            show.value = "Big Mistake";
            return;
        }
        firstNumber = parseFloat(numbers[0]);
        secondNumber = parseFloat(numbers[1]);
        switch (operator) {
          case "+":
            show.value = firstNumber + secondNumber;
            break;
          case "-":
            show.value =firstNumber - secondNumber;
            break;
          case "*":
            show.value= firstNumber * secondNumber;
            break;
          case "/":
             if(secondNumber === 0){
              show.value = "You can't divide by zero!"
             }
             else{
                show.value = firstNumber / secondNumber;
             }
            break;
          default:
            break;
        }
});

// todlist
let userData = "";
inputS.addEventListener("input", function (event) {
    userData = event.target.value;
    inputS.value = userData;
  })
todobutton.addEventListener("click",()=>{
        if(userData !== ""){
            const todolist_item = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = userData;
            todolist_item.innerHTML = `
            <span>${userData}</span>
                <button class="delete-btn">Delete</button>
            `;
            todoList.appendChild(todolist_item);
            inputS.value = "";

            const deleteButton = todolist_item.querySelector(".delete-btn");
            deleteButton.addEventListener("click", () => {
              todoList.removeChild(todolist_item);
            });
            userData = "";
        }
});
document.querySelector(".todobutton2").addEventListener("click", () => {
    const listItem = todoList.querySelector("li");
    if (listItem) {
        listItem.classList.toggle("finished");
    }
  });
  