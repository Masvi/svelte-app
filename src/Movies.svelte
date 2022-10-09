<script>
  import { onMount } from "svelte";

  const { env } = __myapp;

  async function getMovies() {
    const res = await fetch(`${env.BASE_URL}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${env.PRIVATE_KEY}`,
      },
    });
    const data = await res.json();
    console.log(data)
  }

  onMount(() => {
    getMovies();
  });
</script>
