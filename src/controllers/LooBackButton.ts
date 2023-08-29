import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class LooBackButton extends Vue {
  @Prop() private onClick!: object;
}
