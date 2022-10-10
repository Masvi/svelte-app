<script>
  import Header from "./Header.svelte";
  import Subscribe from "./Subscribe.svelte";
  import Movies from "./Movies.svelte";

  let subtitle =
    "A component framework you can use to build high-performance web applications. ";

  const obj = {
    countLabel: "Number of subscribes:",
    maxLabel: "Max of subscribes:",
  };

  const navLabels = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
</script>

<Header {subtitle} {navLabels} />
<Subscribe {...obj} />
<main>
  <section>
    <Movies />
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
    padding: 1rem 1rem 0 1rem;
    width: 100%;
    justify-content: center;
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 500;
  }

  @media (min-width: 550px) {
    section {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin: 1rem;
    }
  }

  @media (min-width: 800px) {
    section {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin: 1rem;
    }
  }
</style>
