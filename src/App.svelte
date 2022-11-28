<script>
  import Kapo from "./komponentoj/fasado/Kapo.svelte";
  import Vorto from "./komponentoj/vortaro/Vorto.svelte";

  import Vortaro from "./vortaro/vortaro.json";

  let vortaro = [];

  function gxistadiguVortaron(evento) {
    vortaro = Vortaro.filter((novvorto) =>
      //novvorto.vorto.split(/\s+|\./).includes(evento.detail.vorto.toLowerCase())
      novvorto.vorto.includes(evento.detail.vorto.toLowerCase())
    );
  }

</script>

<Kapo on:sercxuVorton={gxistadiguVortaron} />
<main class="ujo">
  <section class="vortujo">
    {#each vortaro as vortoj}
      <Vorto vorto={vortoj} />
    {/each}
  </section>
</main>

<style>
  .vortujo {
    display: grid;
    flex-direction: column;
    gap: 20px;
    margin: 20px auto;
    padding: 0 30px 0 20px;
  }
</style>
