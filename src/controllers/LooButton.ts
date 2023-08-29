import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class LooLightBtn extends Vue {
  @Prop() private onClick!: object;
}
