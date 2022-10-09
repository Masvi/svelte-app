<script>
  console.log(process.env('PRIVATE_KEY'));
  async function getMovies() {
    const res = await fetch(`https://the-one-api.dev/v2`, {
      headers: {
        Authorization: `Bearer ${PRIVATE_KEY}`,
      },
    });
  }
</script>
