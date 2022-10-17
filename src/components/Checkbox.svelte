<script>
  export let options = [];
</script>

<div class="checkbox">
  {#each options as label}
    <label>
      <input type="checkbox" />
      {label}
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
</style>
