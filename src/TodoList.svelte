<script>
  let todos = [
    { done: true, text: "drink water" },
    { done: false, text: "build an app" },
    { done: false, text: "buy more beer" },
  ];

  function add() {
    todos = todos.concat({ done: false, text: "" });
  }

  function clear() {}
</script>

<div class="todo-list">
  {#each todos as todo}
    <div>
      <input class="check" type=checkbox checked={todo.done}>
      <input value={todo.text} />
    </div>
  {/each}
</div>

<style>
  .todo-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    background-color: rgb(245, 247, 250);;
  }

  div {
    display: flex;
    align-items: center;
  }

  .check {
    margin: 1rem;
  }

  input {
    margin: 0;
    outline: none;
    color: var(--color2);
  }
</style>
