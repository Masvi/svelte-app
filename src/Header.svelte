<header>
  <div class="title">Svelte</div>
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

  nav ul {
    display: flex;
    flex-flow: column wrap;
    list-style-type: none;
    padding: 0.5rem;
  }

  nav li {
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    cursor: pointer;
  }

  nav a {
    text-decoration: none;
    color: var(--color)
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
