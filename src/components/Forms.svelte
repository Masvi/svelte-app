<script>
  import Select from "./Select.svelte";
  import Checkbox from "./Checkbox.svelte";

  let options = [
    { done: false, name: "Vue" },
    { done: false, name: "React" },
    { done: false, name: "Angular" },
    { done: false, name: "Svelte" },
  ];

  const form = {
    name: "",
    lastName: "",
    question: "",
    framework: "",
  }

  function add() {
    console.log(form)
    console.log(options)
  }
</script>

<div class="forms">
  <div class="colum">
    <div class="group">
      <label for="name">Name</label>
      <input id="name" bind:value={form.name} type="text" />
    </div>
    <div class="group">
      <label for="lastname">Last name</label>
      <input id="lastname" bind:value={form.lastName} type="text" />
    </div>
  </div>
  <div class="colum">
    <div class="group">
      <label for="name">The hardest question</label>
      <Select bind:value={form.question} />
    </div>
    <div class="group">
      <label for="name">Frameworks (only 2)</label>
      <Checkbox {options} />
    </div>
    <div class="group end">
      <button on:click={add}>submit</button>
    </div>
  </div>
</div>

<style>
  .forms {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(245, 247, 250);
    padding: 1rem 0 1rem 0;
    width: 100%;
  }

  .group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    padding: 0.5rem 2rem 0 2rem;
  }

  .end {
    align-items: flex-end;
  }

  label {
    color: var(--color2);
  }

  input {
    min-width: 100%;
    outline: none;
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

  @media (min-width: 800px) {
    .forms {
      display: flex;
      flex-direction: row;
    }
    .colum {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
    }
  }
</style>
