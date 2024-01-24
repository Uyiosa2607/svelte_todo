<script>

    import {onMount} from "svelte";

    import {v4 as uuidv4} from "uuid"

    let todos = []

    function getTodos(){
        todos = JSON.parse(localStorage.getItem("todos")) || [];
    }

    onMount(()=> {
    getTodos()
    })

    let input = "";

    function handleTodo(e) {
        e.preventDefault()
        const id = uuidv4()
        todos = [...todos, {id: id, text: input, complete: false}]
        localStorage.setItem("todos", JSON.stringify(todos))
        input = "";
    }

    function deleteTodo(event) {
         const id = event.target.dataset.id
         todos = todos.filter(todo => todo.id !== id);
         localStorage.setItem("todos", JSON.stringify(todos))

    }

function completeTask(id) {
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    
    todo.complete = !todo.complete;

    localStorage.setItem("todos", JSON.stringify(todos));

    console.log(todo);
  }
}

</script>


<style>

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .todo_app_body {
        background: #fff;
        padding: 1rem;
        color: black;
    }

    .main_title {
        margin-bottom: 1rem;
    }

    .task_status {
        font-weight: bold;
        font-size: 13px;
        margin-bottom: 1rem;
    }

    input {
        border: none;
        font-size: 1rem;
        padding: .5rem;
        background: none;
        border: 1px solid black;
    }

    .todos_container {
        padding: 2rem 0;
    }

    ul {
        list-style: none;
    }

    .add_btn {
        font-size: 1rem;
        padding: .5rem 1rem;
        border: none;
        font-weight: bold;
        background: orange;
        color: #fff;
    }

    .del_btn {
        border: none;
    }

    form {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: .6rem;
    }

    .todo_item {
        display: flex;
        align-items: center;
        gap: 1rem;
        background: whitesmoke;
        margin: 1rem 0;
    }

    .done {
        text-decoration: line-through;
    }

    .todo_item {
        padding: 1rem .5rem;
    }

</style>

<div class="container">
    <div class="todo_app_body">
        <h2 class="main_title">My Tasks</h2>
        <span class="task_status">2 of {todos.length} tasks</span>
        <form on:submit={handleTodo}>
            <input bind:value={input} bind type="text">
            <button type="submit"  class="add_btn">Add todo</button>
        </form>
        <div class="todos_container">
            {#if todos.length < 1} <span>No todos</span> {:else}
            <ul>
                 {#each todos as {id, text, complete} (id)}
                 <li class="todo_item">
                    <input  bind:checked={complete}  on:click={()=> completeTask(id)} class="check_box" type="checkbox">
                    <p class="todo_title {complete ? "done" : ""}">{text}</p>
                    <button on:click={deleteTodo} data-id={id} class="del_btn">X</button>
                 </li>
            {/each}
            </ul>
            {/if}
        </div>
    </div>
</div>