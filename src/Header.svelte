<script>
  // prop definition 
  export let subtitle = "Fallback in case the father dont provide the prop";
</script>

<header>
  <div class="title">Svelte</div>
  <div class="subtitle">{subtitle}</div>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-flow: row wrap;
    background-color: aliceblue;
  }

  .subtitle {
    display: flex;
    justify-content: center;
    padding: 0 1rem 1rem 1rem;
    width: 100%;
    font-size: .8rem;
    color: var(--color2);
  }

  nav ul {
    display: flex;
    flex-flow: column wrap;
    list-style-type: none;
    padding: 0.5rem;
  }

  nav li {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
  }

  nav a {
    text-decoration: none;
    color: var(--color2);
    font-weight: 500;
    font-size: 1.3rem;
  }

  @media (min-width: 550px) {
    nav ul {
      flex-flow: row wrap;
      list-style-type: none;
    }
  }
  @media (min-width: 800px) {
    header {
      display: flex;
      justify-content: center;
    }
  }
</style>
