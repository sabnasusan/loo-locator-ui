import { Component, Prop, Vue } from 'vue-property-decorator';
import LooLargeButton from '@/loo-components/LooLargeButton.vue';
import LooButton from '@/loo-components/LooButton.vue';
import { LooAminities } from '@/models/LooAminities';
import { LooDetails } from '@/models/LooDetails';
import constants from '@/common/constants';

@Component({
  components: {
    LooLargeButton,
    LooButton,
  },
})

export default class LooAminity extends Vue {
  @Prop() private onClick!: object;
  @Prop() private data!: LooAminities[];

  private looDetail: LooDetails[] = [];
  private constants = constants;

  private created() {
    if (this.$store.state.LooLoc.looDetail.length > 0) {
      this.looDetail = [...this.$store.state.LooLoc.looDetail];
    }
  }
  private actionhandle() {
    this.$router.push({ path: '/' });
  }
}
