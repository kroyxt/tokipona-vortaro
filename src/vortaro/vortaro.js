import { writable } from "svelte/store";
import Vortaro from "./vortaro.json";

const vortoj = writable(Vortaro);

const vortaro = {
  subscribe: vortoj.subscribe,
  obtenuPuVortojn() {
    vortoj.update(() => {
      return Vortaro.filter((vorto) => vorto.vorto.split(/\s+/).length == 1);
    })
  },
  filtruVortojn(enmetitaVorto) {
    vortoj.update(() => {
      return Vortaro.filter((vorto) => vorto.vorto.includes(enmetitaVorto));
    })
  },
  obtenuKunmetitajnVortojn(enmetitaVorto) {
    vortoj.update(() => {
      return Vortaro.filter((vorto) =>
        vorto.vorto.split(/\s+|\./).includes(enmetitaVorto.toLowerCase())
      );
    })
  }
}

export default vortaro;

