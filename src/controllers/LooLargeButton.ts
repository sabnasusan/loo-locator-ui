import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class LooLargeButton extends Vue {
  @Prop() private onClick!: object;
}
