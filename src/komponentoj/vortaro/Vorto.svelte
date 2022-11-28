<script>
  export let vorto = {};

  function subtitolo(traduko) {
    return traduko.charAt(0).toUpperCase() + traduko.slice(1);
  }

  function tradukoj(traduko) {
    return vorto.traduko[traduko].join(", ");
  }

</script>

<article
  class="vorto"
  style={vorto.vorto.split(/\s+/).length == 1 ? "order: -1" : ""}
>
  <header class="vorto__kapo">
    <h1 class="vorto__titolo">{vorto.vorto}</h1>
    <span class="linja-pona vorto__sitelen">{vorto.sitelenpona}</span>
  </header>
  <ul class="vorto__tradukujo">
    {#each Object.keys(vorto.traduko) as traduko}
      <li class="vorto__traduko">
        <h2 class="vorto__subtitolo">{subtitolo(traduko)}:</h2>
        <p>{tradukoj(traduko)}.</p>
      </li>
    {/each}
    <!--<p>{vorto.tradukoj.angla.join(", ")}.</p>-->
  </ul>
</article>

<style>
  .vorto {
    background-color: var(--koloro-unua);
    border-radius: 8px;
    border: 2px solid white;
    box-shadow: 8px 8px 0 white;
    color: white;
    font-size: 16px;
    font-weight: bold;
    max-width: 100%;
    outline: none;
    position: relative;
    text-align: left;
  }
  .vorto__kapo {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    border-bottom: 2px solid white;
  }
  .vorto__titolo {
    font-size: 30px;
  }
  .vorto__sitelen {
    font-size: 40px;
    order: -1;
    font-weight: normal;
  }
  .vorto__tradukujo {
    padding: 25px;
    padding-top: 0;
  }
  .vorto__subtitolo {
    font-size: 20px;
    margin-bottom: 5px;
  }
  .vorto__traduko {
    margin-top: 25px;
    padding-left: 10px;
    border-left: 2px solid white;
  }

  @media (min-width: 600px) {
    .vorto__kapo {
      justify-content: space-between;
      flex-direction: initial;
    }
    .vorto__sitelen {
      order: initial;
    }
  }
</style>
