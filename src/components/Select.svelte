<script>
  import { prevent_default } from "svelte/internal";

  let questions = [
    { id: 1, text: "Svelte better than React?" },
    { id: 2, text: "Vue is better than React and Svelte?" },
    { id: 3, text: "Angular is dead?" },
  ];

  let selected;
  let answer = "";

  function handleSumit() {
    console.log(selected);
  }
</script>

<select bind:value={selected} on:change={() => (answer = "")}>
  {#each questions as question}
    <option value={question}>{question.text}</option>
  {/each}
</select>

<style>
  select {
    outline: none;
    background-color: white;
    color: var(--color2);
    width: 100%;
  }
</style>
