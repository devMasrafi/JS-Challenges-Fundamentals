const formAction = document.querySelector("form");
const formInputBox = document.querySelector("#inputBox");
const formSubmitBtn = document.querySelector("#submitBtn");
const userNotif = document.querySelector(".userNotif");

const updateInstruction = document.querySelector('#updateInstruct')
const showListItems = document.querySelector(".orderList");

// console.log(updateInstruction);

const toDoListArray = [];

formAction.addEventListener("submit", function (e) {
  e.preventDefault();

  const userTodo = formInputBox.value.trim();
  // console.log(userTodo)

  if (userTodo === "") {
    userNotif.textContent = `please add text before submit`;
  } else {
    toDoListArray.push(userTodo)
    console.log(toDoListArray);

    todoListItems()
    emptyInstruct()
    formInputBox.value = ''
    userNotif.textContent = ``;
  }
});

function emptyInstruct(){
    if(toDoListArray.length > 0){
        updateInstruction.textContent = ``
    }
}

function todoListItems(){
    showListItems.innerHTML =''

    toDoListArray.forEach((item, index) =>{
        const li = document.createElement('li')

        const span = document.createElement('span')
        span.textContent = item;

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = `Delete`;

        li.appendChild(span)
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', function(){
            toDoListArray.splice(index, 1)
            todoListItems()
        })

        showListItems.appendChild(li)
    })
}