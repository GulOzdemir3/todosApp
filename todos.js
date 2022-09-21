let choices = prompt("What would you like to do?");
const todoList = ["Have breakfast"]
while (choices !== "quit" && choices !== "q"){
    if (choices === "list") {
        for (let i = 0; i< todoList.length; i++) {
            console.log(`Index ${i}: ${todoList[i]}`);
        }
    } else if (choices === "add") {
        const newTodo = prompt("Enter a new todo");
        todoList.push(newTodo);
        console.log(`You have added '${newTodo}' to your list`);
    } else if (choices === "delete") {
        const deleteIndex = parseInt(prompt("Enter an item to delete: "))
        if (!Number.isNaN(deleteIndex)) {
            const deletedIndex = todoList.splice(deleteIndex, 1);
            console.log(`deleted ${deletedIndex[0]}`);
        } else {
            console.log("Enter a valid number!");
        }
        
    }

    choices = prompt("What would you like to do?")

}
console.log("You quit the app")

