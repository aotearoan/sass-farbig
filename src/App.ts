import { Component, Vue } from 'vue-property-decorator';
import Swatch from './components/swatch/Swatch.vue';
import SwatchLegend from './components/swatch-legend/SwatchLegend.vue';

@Component({
  components: {
    Swatch,
    SwatchLegend,
  },
})
export default class App extends Vue {
  private theme = 'dark';

  private switchTheme(theme: string) {
    document.body.classList.remove(this.theme);
    document.body.classList.add(theme);
    this.theme = theme;
  }
}
