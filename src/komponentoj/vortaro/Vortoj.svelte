<script>
  import vortaro from "../../vortaro/vortaro.js";
  import Vorto from "../vortaro/Vorto.svelte";
</script>

<section class="vortujo">
  {#each $vortaro as vortoj}
    <Vorto vorto={vortoj}/>
  {:else}
    <h2 class="netrovita">La vorto ne estis trovita.</h2>
  {/each}
</section>

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
