<script>
  import { createEventDispatcher, afterUpdate } from "svelte";

  export let value = "";
  export let debounce = 0;
  export let label = "Label";
  export let id = "";

  const dispatch = createEventDispatcher();

  let prevValue = value;
  let calling = false;

  const debounceFn = (fn) => {
    if (calling) return;

    calling = true;
    setTimeout(() => {
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

<div class="search-input">
  <label>
    <slot name="label">{label}</slot>
  </label>
  <input
    name="seach"
    type="search"
    placeholder="search..."
    autocomplete="off"
    spellcheck="false"
    bind:value
    {id}
  />
</div>
