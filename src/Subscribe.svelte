<script>
  let count = 0;
  $: maxSubscribes = 5 - count;
  /* 
    the $: allow to rerun every time the value of count changes
    this is called a reactive declaration 
    can have many of them as we like
  */

  $: console.log('max: ', maxSubscribes);
  $: if (count >= 5 ) console.log('count: ', count);

  function handleClick() {
    count += 1;
  }
</script>

<section>
  <button on:click={handleClick}>Subscribe</button>
  <span>Number of subscribes: {count}</span>
  <span
    >Max of subscribes: {maxSubscribes <= 0
      ? "sold out"
      : maxSubscribes}</span
  >
</section>

<style>
  section {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    height: 100px;
    background-color: var(--color5);
  }

  button {
    margin: 0;
    padding: 0;
    width: 100px;
    height: 40px;
    border-style: none;
    background-color: var(--color2);
    color: white;
    font-weight: 500;
  }

  span {
    color: var(--color2);
    font-weight: 500;
    font-size: 1.2rem;
  }

  @media (min-width: 550px) {
    section {
      flex-flow: row wrap;
      padding: 0;
    }
  }
</style>
