<script>
  import { count } from "../stores/counter.js";

  function increment() {
    count.update((n) => n + 1);
  }

  function decrement() {
    count.update((n) => n - 1);
  }
</script>

<div>
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button>
</div>

<style>

  button {
    margin: 0;
    padding: 0;
    width: 60px;
    height: 35px;
    border-style: none;
    background-color: var(--color4);
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
</style>
