import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Swatch extends Vue {
  @Prop({ required: true })
  public name!: string;
}
