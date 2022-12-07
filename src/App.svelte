<script>
  import Header from "./Header.svelte";
  import Subscribe from "./components/Subscribe.svelte";
  import Movies from "./components/Movies.svelte";
  import Events from "./components/Events.svelte";
  import Binding from "./components/Binding.svelte";
  import Options from "./components/Options.svelte";
  import Forms from "./components/Forms.svelte";
  import TodoList from "./components/TodoList.svelte";
  import Footer from "./Footer.svelte";
  import Counter from "./components/Counter.svelte";
  import SearchInput from "./components/SearchInput.svelte";

  import { count } from "./stores/counter";
  import { onDestroy } from "svelte";

  let count_value;

  const unsubscribe = count.subscribe((value) => {
    count_value = value;
  });

  // prevent memory leak
  onDestroy(unsubscribe);

  let subtitle =
    "A component framework you can use to build high-performance web applications. ";

  const obj = {
    countLabel: "Number of subscribes:",
    maxLabel: "Max of subscribes:",
  };

  let messageByEvent = "";
  let value = "";
  let term = "";

  function handleEvent(event) {
    if (event.detail.count > 5) {
      return (messageByEvent = "mensagem default");
    }
    messageByEvent = event.detail.text;
  }

  function handleSearch(e) {}

  const navLabels = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
</script>

<Header {subtitle} {navLabels} />
<main>
  <Subscribe {...obj} />
  <section>
    <div class="box inside">
      <div class="section_subtitle inside-title">
        Creating a communication between components using events. They must
        create an event dispatcher
      </div>
      <Events on:myEventName={handleEvent} {messageByEvent} />
    </div>
    <div class="box inside">
      <div class="section_subtitle inside-title">
        Input binding. Changes on the name variable will update the input value
      </div>
      <Binding />
    </div>
    <div class="box inside">
      <Counter />
      <div class="counter">
        <span>{count_value}</span>
      </div>
    </div>
  </section>

  <section>
    <div class="section_title">Movies</div>
    <div class="section_subtitle">
      Lord of Rings movies called from an API. This api provides a bunch of data
      about the movies, books and characters.
    </div>
    <div class="section_subtitle">
      <SearchInput
        id="home-search"
        debounce={500}
        bind:value
        on:type={(e) => {
          term = e.detail;
        }}
      >
        <span slot="label">Buscar</span>
      </SearchInput>
    </div>
    <Movies {term} />
  </section>

  <section>
    <div class="section_title">Form</div>
    <div class="section_subtitle">An simple form</div>
    <Forms />
  </section>

  <section>
    <div class="section_title">Todo List</div>
    <div class="section_subtitle">An simple todo list</div>
    <TodoList />
  </section>
</main>
<Footer />

<style>
  main {
    text-align: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 1rem;
  }

  section {
    width: 100%;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    height: 150px;
    margin-bottom: 0.5rem;
    background-color: var(--color3);
    padding: 0.5rem;
  }

  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* span {
    font-size: 2rem;
    padding: 1rem;
    font-weight: 500;
  }
   */
  .inside {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  .inside-title {
    text-align: center !important;
    color: white !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .section_title {
    display: flex;
    font-size: 2rem;
    padding-top: 1rem;
    color: var(--color2);
    width: 100%;
  }

  .section_subtitle {
    display: flex;
    text-align: start;
    justify-content: flex-start;
    margin-bottom: 1rem;
    width: 100%;
    font-size: 0.8rem;
    color: var(--color2);
  }

  /* global style - can use this class at any component */
  :global(.title) {
    display: flex;
    padding: 1rem 1rem 0 1rem;
    width: 100%;
    justify-content: center;
    color: #ff3e00;
    font-size: 3em;
    font-weight: 500;
  }

  @media (min-width: 550px) {
    section {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    .box {
      flex-basis: 46%;
    }

    .mid {
      flex-basis: 100%;
    }
  }

  @media (min-width: 800px) {
    section {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    .box {
      flex-basis: 30%;
    }

    .mid {
      flex-basis: 100%;
    }
  }
</style>
