<script>
  export let options = [];
  let done = false;

  function handleCheck() {

  }
</script>

<div class="checkbox" class:done={done}>
  {#each options as item}
    <label>
      <input
        type="checkbox"
        bind:checked={item.done}
        on:click={handleCheck}
      />
      {item.name}
    </label>
  {/each}
</div>

<style>
  .checkbox {
    padding: 1rem 0 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: var(--color2);
  }

  .done {
    opacity: 0.5;
  }
</style>
