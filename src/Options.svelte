<script>
  let options = 1;

  let menu = ["pasta", "meat", "cake"];
  let choice = ["pasta"]
</script>

<div>
  <section>
    <label>
      <input type="radio" bind:group={options} value={1} />
      First
    </label>
    <label>
      <input type="radio" bind:group={options} value={2} />
      Second
    </label>
  </section>
  <section>
    {#each menu as food}
      <label>
        <input type="checkbox" bind:group={choice} value="{food}" />
        {food}
      </label>
    {/each}
  </section>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3px;
  }

  label,
  input {
    cursor: pointer;
  }
</style>
