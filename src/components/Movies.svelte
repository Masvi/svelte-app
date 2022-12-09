<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  const { env } = __myapp;
  let loading = true;
  let movies = [];
  let unfiltred = [];
  export let term = "";

  onMount(async () => {
    movies = await getMovies();
    unfiltred = movies;
    loading = false;
  });

  async function getMovies() {
    const res = await fetch(`${env.BASE_URL}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${env.PRIVATE_KEY}`,
      },
    });
    const data = await res.json();

    if (res.status === 200) {
      return data.docs;
    }
    throw new Error();
  }

  $: if (term) search();

  function search() {
    const formattedTerm = term.toLowerCase().trim();

    if (formattedTerm.length <= 1 && movies.length !== unfiltred.length) {
      return (movies = unfiltred);
    }

    if (formattedTerm.length > 0) {
      const filtred = unfiltred.filter((movies) =>
        movies.name.toLowerCase().includes(formattedTerm)
      );
      movies = filtred;
    } else {
      movies = unfiltred;
    }
  }
</script>

{#if loading}
  <div class="message">waiting...</div>
{:else}
  {#each movies as { name }}
    <div class="box" transition:fly={{ y: 200, duration: 500 }}>
      {name}
    </div>
  {/each}
{/if}

<style>
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    height: 90px;
    margin-bottom: 2px;
    background-color: var(--color2);
    padding: 0.5rem;
  }

  .message {
    display: flex;
    justify-content: center;
    width: 100vw;
    font-size: 1.5rem;
    color: #ff3e00;
  }

  @media (min-width: 550px) {
    .box {
      flex-basis: 46%;
    }
  }

  @media (min-width: 800px) {
    .box {
      flex-basis: 22%;
    }
  }
</style>
