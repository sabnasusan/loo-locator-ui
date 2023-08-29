import { Component, Prop, Vue } from 'vue-property-decorator';
import LooLargeButton from '@/loo-components/LooLargeButton.vue';
import LooButton from '@/loo-components/LooButton.vue';
import { LooDetails } from '@/models/LooDetails';
import constants from '@/common/constants';

@Component({
  components: {
    LooLargeButton,
    LooButton,
  },
})

export default class LooMapWay extends Vue {
  @Prop() private onClick!: object;
  @Prop() private data!: LooDetails[];
  private constants = constants;

  // To be implemented live map
  private actionhandle() {
    alert('Action clicked');
  }
  // route to aminities
  private toAminities() {
    this.$router.push({ path: '/aminities' });
  }
}
