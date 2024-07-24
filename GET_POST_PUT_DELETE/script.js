fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        title:"buy vegetables",
        completed: true
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))
fetch('https://jsonplaceholder.typicode.com/todos/5', {
    method: 'PUT',
    body: JSON.stringify({
        userId: 1,
        id: 5,
        title: "updated resource",
        completed: true
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))
fetch('https://jsonplaceholder.typicode.com/todos/2', {
    method: 'PATCH',
    body: JSON.stringify({
        userId: 4,
        title:"adssad",
        completed: true
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(newArray => {
    let userId = newArray[150];
    console.log(userId)
})