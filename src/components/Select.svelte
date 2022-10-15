<script>
  import { prevent_default } from "svelte/internal";

  let questions = [
    { id: 1, text: "Svelte better than React?" },
    { id: 2, text: "Vue is better than React and Svelte?" },
    { id: 3, text: "Angular is dead?" },
  ];

  let selected;
  let answer ="fdsf";

  function handleSumit() {
    console.log(selected)
  };
</script>

<form on:submit|preventDefault={handleSumit}>
  <select bind:value={selected} on:change="{() => answer = ''}">
    {#each questions as question}
      <option value={question}>{question.text}</option>
    {/each}
  </select>

  <button type="submit" disabled={!answer}>Submit</button>
</form>

<style>
  select {
    outline: none;
    background-color: white;
    color: var(--color2);
  }

  button {
    margin: 0;
    padding: 0;
    width: 100px;
    height: 40px;
    border-style: none;
    background-color: var(--color4);
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
</style>
