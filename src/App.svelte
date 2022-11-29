<script>
  import Kapo from "./komponentoj/fasado/Kapo.svelte";
  import Vorto from "./komponentoj/vortaro/Vorto.svelte";

  import Vortaro from "./vortaro/vortaro.json";

  let vortaro = Vortaro.filter((vorto) => vorto.vorto.split(/\s+/).length == 1);

  function gxistadiguVortaron(evento) {
    let enmetitaVorto = evento.detail.vorto;

    if (enmetitaVorto == null || enmetitaVorto == "") {
      vortaro = Vortaro.filter((vorto) => vorto.vorto.split(/\s+/).length == 1);
    } else {
      vortaro = Vortaro.filter((novvorto) =>
        novvorto.vorto.includes(enmetitaVorto.toLowerCase())
      );
    }
    supreniru();
  }

  function montruKumetajnVortojn(evento) {
    vortaro = Vortaro.filter((novvorto) =>
      novvorto.vorto.split(/\s+|\./).includes(evento.detail.vorto.toLowerCase())
    );
    supreniru();
  }

  function supreniru() {
    document.body.scrollIntoView();
  }
</script>

<Kapo on:supreniru={supreniru} on:sercxuVorton={gxistadiguVortaron} />
<main class="ujo">
  <section class="vortujo">
    {#each vortaro as vortoj}
      <Vorto vorto={vortoj} on:kunmeto={montruKumetajnVortojn} />
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
