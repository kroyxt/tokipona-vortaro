<button on:click class="butono"><slot /></button>

<style>
  .butono {
    -webkit-user-select: none;
    background-color: var(--koloro-unua);
    border-radius: 8px;
    border: 2px solid white;
    box-shadow: 8px 8px 0 white;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    height: 48px;
    max-width: 100%;
    outline: none;
    padding: 0 25px;
    position: relative;
    text-align: center;
    touch-action: manipulation;
    user-select: none;
  }

  .butono:active {
    transform: translate(8px, 8px);
    box-shadow: 0px 0px;
    outline: none;
  }
</style>
