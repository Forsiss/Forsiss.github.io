/* //Array example
const myArray = [10, 20, 30];
const yourArray = [` ${myArray} `];
console.log(myArray);

console.log(myArray[0]);
*/

/*
myArray.slice(); //delete value from array
(can delete many values: 
    myArray.slice(0, 2)delete values in 0 to 2 index)
myArray.push(); //add value at the end of array
*/


// todo list code

const todoList = [{
    name: 'make dinner',
    dueDate: '2024-12-22'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
                <div>${name}</div>
                <div>${dueDate}</div> 
                <button onclick = "
                    todoList.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button>
        `;
        todoListHTML += html;
    };

    document.querySelector('.todoList').innerHTML = todoListHTML;
};


function addTodo(){
    const nameInputElement = document.querySelector('.nameInputName');
    const name = nameInputElement.value;
    const dateInputElement = document.querySelector('.dueDateInput');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    });

    nameInputElement.value = '';

    renderTodoList();
};

function costKeyDown(){
    if(event.key === 'Enter'){
        addTodo();
    };
};