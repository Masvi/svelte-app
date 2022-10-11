<script>
  import { onMount } from "svelte";

  const { env } = __myapp;
  let promise = null;

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
  onMount(() => (promise = getMovies()));
</script>

{#await promise}
  <div class="message">waiting...</div>
{:then movies}
  {#if movies}
    {#each movies as { name }}
      <div class="box">
        { name }
      </div>
    {/each}
  {/if}
{:catch}
  <div class="message">Somenthing wrong!</div>
{/await}

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
    padding: .5rem;
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
