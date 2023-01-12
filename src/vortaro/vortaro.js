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
  /**
   * @param {string} enmetitaVorto
   */
  filtruVortojn(enmetitaVorto) {
    vortoj.update(() => {
      return Vortaro.filter((vorto) => {
        const traduko = vorto.traduko;
        const substantivo = !!traduko.substantivo ? [...traduko.substantivo.map(vorto => vorto.toLowerCase())] : [];
        const adjektivo = !!traduko.adjektivo ? [...traduko.adjektivo.map(vorto => vorto.toLowerCase())] : [];
        const adverbo = !!traduko.adverbo ? [...traduko.adverbo.map(vorto => vorto.toLowerCase())] : [];
        const gramatikajxo = !!traduko.gramatikajxo ? [...traduko.gramatikajxo.map(vorto => vorto.toLowerCase())] : [];
        const interjekcio = !!traduko.interjekcio ? [...traduko.interjekcio.map(vorto => vorto.toLowerCase())] : [];
        const konjunkcio = !!traduko.konjunkcio ? [...traduko.konjunkcio.map(vorto => vorto.toLowerCase())] : [];
        const korelativo = !!traduko.korelativo ? [...traduko.korelativo.map(vorto => vorto.toLowerCase())] : [];
        const verbo = !!traduko.verbo ? [...traduko.verbo.map(vorto => vorto.toLowerCase())] : [];

        return vorto.vorto.includes(enmetitaVorto) ||
          adjektivo.includes(enmetitaVorto) ||
          adverbo.includes(enmetitaVorto) ||
          gramatikajxo.includes(enmetitaVorto) ||
          interjekcio.includes(enmetitaVorto) ||
          konjunkcio.includes(enmetitaVorto) ||
          korelativo.includes(enmetitaVorto) ||
          substantivo.includes(enmetitaVorto) ||
          verbo.includes(enmetitaVorto)
      });
    })
  },
  /**
   * @param {string} enmetitaVorto
   */
  obtenuKunmetitajnVortojn(enmetitaVorto) {
    vortoj.update(() => {
      return Vortaro.filter((vorto) =>
        vorto.vorto.split(/\s+|\./).includes(enmetitaVorto.toLowerCase())
      );
    })
  },
}

export default vortaro;

