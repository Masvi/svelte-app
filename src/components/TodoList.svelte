<script>
  let todos = [
    { done: true, text: "drink water" },
    { done: false, text: "build an app" },
  ];

  let newTask = "";

  function add() {
    if (newTask != "") {
      todos = todos.concat({ done: false, text: newTask });
      newTask = "";
    }
  }

  function clear() {
    todos = [];
  }
</script>

<div class="todo-list">
  <div class="list">
    {#each todos as todo}
      <div class="form" class:done={todo.done}>
        <input class="check" type="checkbox" bind:checked={todo.done} />
        <input class="entry" type="text" bind:value={todo.text} />
      </div>
    {/each}
  </div>
  <div class="todo">
    <input class="entry-2" bind:value={newTask} />
    <button on:click={add}>add task</button>
    <button class="clear" on:click={clear}>clear</button>
  </div>
</div>

<style>
  .todo-list {
    display: flex;
    flex-flow: row wrap;
    background-color: rgb(245, 247, 250);
    width: 100%;
    padding: 1rem 0 1rem 0;
  }

  .list {
    justify-content: flex-start;
    width: 100%;
  }

  .done {
    opacity: 0.5;
    margin: 0.5rem;
  }

  .form {
    margin: 0.5rem;
  }

  .clear {
    margin-left: 10px;
    background-color: var(--color2);
  }

  .entry {
    min-width: 90%;
  }

  .entry-2 {
    width: 50%;
    margin-right: 1rem;
  }

  .todo {
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: 100%;
  }

  input {
    margin: 0;
    outline: none;
    color: var(--color2);
  }

  button {
    margin: 0;
    padding: 0;
    width: 100px;
    height: 35px;
    border-style: none;
    background-color: var(--color4);
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
</style>
