<script>
  import Header from "./Header.svelte";
  export let name;
</script>

<Header />
<main>
  <section>
    <div class="box box1">01</div>
    <div class="box box2">02</div>
    <div class="box box3">03</div>
    <div class="box box4">04</div>
    <div class="box box5">05</div>
    <div class="box box6">06</div>
  </section>
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0;
  }

  /* global style - can use this class at any component */
  :global(.title) {
    display: flex;
    padding: 1rem;
    width: 100%;
    justify-content: center;
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 500;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 2rem;
    font-weight: 500;
    height: 300px;
  }

  .box1 {
    background-color: var(--color2);
  }

  .box2 {
    background-color: var(--color3);
  }

  .box3 {
    background-color: var(--color4);
  }

  .box4 {
    background-color: var(--color5);
  }

  .box5 {
    background-color: var(--color6);
  }

  .box6 {
    background-color: var(--color7);
  }

  @media (min-width: 550px) {
    section {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin: 1rem;
    }

    .box {
      flex-basis: 48%;
    }
  }

  @media (min-width: 800px) {
    section {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin: 1rem;
    }

    .box {
      flex-basis: 32%;
    }
  }
</style>
