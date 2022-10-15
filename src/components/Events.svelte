<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let count = 0;
  export let messageByEvent;

  function sendEvent() {
    count++;

    dispatch("myEventName", {
      text: `Hello motherfucker ${count}`,
      count
    });
  }
</script>

<button on:click={sendEvent}>Send event</button>
<span>{messageByEvent}</span>

<style>
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

  span {
    padding: 0.5rem;
  }
</style>
