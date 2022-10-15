<script>
  let name = "";
</script>

<div class="forms">
  <input bind:value={name}>
  <span>{name}</span>
</div>


<style>
  .forms {
    display: flex;
    flex-flow: row wrap;
  }

  input {
    margin: 0;
    padding: 0;
    color: var(--color2);
    outline: none;
    max-width: 160px;
    height: 30px;
  }

  span {
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 5px;
  }
</style>