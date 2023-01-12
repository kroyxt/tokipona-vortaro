<script>
  export let enmetitaVorto = "";
</script>

<input on:keypress class="enigo" bind:value={enmetitaVorto} />

<style>
  .enigo {
    -webkit-user-select: none;
    background-color: var(--koloro-unua);
    border-radius: 8px;
    border: 2px solid white;
    box-shadow: 8px 8px 0 white;
    color: white;
    cursor: pointer;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    height: 48px;
    width: 100%;
    outline: none;
    padding: 0 25px;
    position: relative;
    text-align: center;
    touch-action: manipulation;
    transition: transform 0.2s, box-shadow 0.2s;
    user-select: none;
    text-transform: lowercase;
  }

  .enigo:focus {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    transform: translate(8px, 8px);
    box-shadow: 0px 0px;
    outline: none;
  }
</style>
