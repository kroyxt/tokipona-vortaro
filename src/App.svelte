<script>
  import Kapo from "./komponentoj/fasado/Kapo.svelte";
  import Vorto from "./komponentoj/vortaro/Vorto.svelte";

  import Vortaro from "./vortaro/vortaro.json";

  let vortoj = Vortaro.filter((vorto) => vorto.vorto.split(/\s+/).length == 1);

  function gxistadiguVortaron(evento) {
    let enmetitaVorto = evento.detail.vorto;

    if (enmetitaVorto == null || enmetitaVorto == "") {
      vortoj = Vortaro.filter((vorto) => vorto.vorto.split(/\s+/).length == 1);
    } else {
      vortoj = Vortaro.filter((novvorto) =>
        novvorto.vorto.includes(enmetitaVorto.toLowerCase())
      );
    }
    iruSupren();
  }

  function montruKumetajnVortojn(evento) {
    vortoj = Vortaro.filter((novvorto) =>
      novvorto.vorto.split(/\s+|\./).includes(evento.detail.vorto.toLowerCase())
    );
    iruSupren();
  }

  function iruHejmpagxen() {
    vortoj = Vortaro.filter((vorto) => vorto.vorto.split(/\s+/).length == 1);
    iruSupren();
  }

  function iruSupren() {
    document.body.scrollIntoView();
  }
</script>

<Kapo on:supreniru={iruHejmpagxen} on:sercxuVorton={gxistadiguVortaron} />
<main class="ujo">
  <section class="vortujo">
    {#each vortoj as vortoj}
      <Vorto vorto={vortoj} on:kunmeto={montruKumetajnVortojn} />
    {:else}
      <h2 class="netrovita">No</h2>
    {/each}
  </section>
</main>

<style>
  .vortujo {
    display: grid;
    gap: 20px;
    margin: 20px auto;
    padding: 0 30px 0 20px;
  }
  @media (min-width: 768px) {
    .vortujo {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
