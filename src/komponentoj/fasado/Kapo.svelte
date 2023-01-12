<script>
  import Enigo from "./Enigo.svelte";
  import Butono from "./Butono.svelte";
  import vortaro from "../../vortaro/vortaro.js";

  export let enmetitaVorto = null;

  function iruHejmpagxen() {
    vortaro.obtenuPuVortojn();
    document.body.scrollIntoView();
    enmetitaVorto = "";
  }

  function sercxuVorton() {
    if (enmetitaVorto == null || enmetitaVorto == "") {
      vortaro.obtenuPuVortojn();
    } else {
      vortaro.filtruVortojn(enmetitaVorto);
    }
    document.body.scrollIntoView();
  }

  /**
     * @param {{ code: string; }} e
     */
  function PremuJeEnter(e) {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
      sercxuVorton();
    }
  }
</script>

<header class="kapo">
  <div class="ujo">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h1
      on:click={iruHejmpagxen}
      class="linja-pona kapo__titolo"
    >
      lipu+nimi pi+toki+pona
    </h1>
    <section class="kapo__sercxo">
      <Enigo bind:enmetitaVorto={enmetitaVorto} on:keypress={PremuJeEnter} />
      <Butono on:click={sercxuVorton}>Serĉu</Butono>
    </section>
  </div>
</header>

<style>
  .kapo {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--koloro-unua);
    width: 100%;
    padding: 20px 30px 5px 20px;
    box-shadow: 0 10px 10px var(--koloro-unua);
  }
  .kapo__titolo {
    margin-bottom: 30px;
    text-align: center;
    font-size: 4rem;
    font-weight: normal;
    cursor: pointer;
  }
  .kapo__sercxo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }
  @media (min-width: 801px) {
    .kapo__titolo {
      height: 7rem;
      line-height: 7rem;
      font-size: 7rem;
    }
  }
</style>
