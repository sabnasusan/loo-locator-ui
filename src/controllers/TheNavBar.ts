import { Component, Prop, Vue } from 'vue-property-decorator';

export default class TheNavBar extends Vue {
  @Prop() private onClick!: object;
}
