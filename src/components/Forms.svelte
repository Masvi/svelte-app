<div class="forms">
  <div class="colum">
    <div class="group">
      <label for="name">Name</label>
      <input id="name" type="text" />
    </div>
    <div class="group">
      <label for="name">Last name</label>
      <input id="name" type="text" />
    </div>
  </div>
  <div class="colum">
    <div class="group">
      <label for="name">Food preffer</label>
      <input id="name" type="text" />
    </div>
    <div class="group">
      <label for="name">Food preffer</label>
      <input id="name" type="text" />
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
    padding: .5rem 2rem 0 2rem;
  }

  label {
    color: var(--color2);
  }

  input {
    min-width: 100%;
    outline: none;
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
