<script>
  import { createEventDispatcher, afterUpdate } from "svelte";

  export let value = "";
  export const debounce = 0;
  export const label = "Label";
  export const id = "search" + Math.random().toString(36);

  const dispatch = createEventDispatcher();

  let prevValue = value;
  let timeout = undefined;
  let calling = false;

  const debounceFn = (fn) => {
    if (calling) return;

    calling = true;
    timeout = setTimeout(() => {
      fn();
      calling = false;
    }, debounce);
  };

  afterUpdate(() => {
    if (value.length > 0 && value !== prevValue) {
      if (debounce > 0) {
        debounceFn(() => dispatch("type", value));
      } else {
        dispatch("type", value);
      }
    }
  });
</script>

<form on:submit|preventDefault>
  <label>
    <slot name="label">{label}</slot>
  </label>
  <input
    name="seach"
    type="search"
    placeholder="search..."
    autocomplete="off"
    spellcheck="false"
    {id}
    bind:value
  />
</form>
