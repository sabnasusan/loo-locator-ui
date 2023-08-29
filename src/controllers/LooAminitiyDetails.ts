import { Component, Prop, Vue } from 'vue-property-decorator';
import TheNavBar from '@/loo-components/TheNavBar.vue';
import LooBackButton from '@/loo-components/LooBackButton.vue';
import LooMenu from '@/loo-components/LooMenu.vue';
import LooAminity from '@/components/LooAminity.vue';
import { LooCategory } from '@/models/LooCategory';
import { LooAminities } from '@/models/LooAminities';
import { LooDetails } from '@/models/LooDetails';
import LooLoader from '@/loo-components/LooLoader.vue';
import constants from '@/common/constants';

@Component({
  components: {
    TheNavBar,
    LooBackButton,
    LooAminity,
    LooMenu,
    LooLoader,
  },
})

export default class LooAminityDetails extends Vue {
  @Prop() private msg!: string;

  private categories: LooCategory[] = [];
  private looDetails: LooDetails[] = [];
  private aminityDetails: LooAminities[] = [];
  private constants = constants;
  private showMap: boolean = false;
  private loader: boolean = true;
  private looId: number = constants.DEFAULTCATEGORY;

  private created() {
    if (this.$store.state.LooLoc.looDetail.length === 0) {
      this.$router.push({ path: '/' });
    } else {
      this.mapCategories();
    }
  }
  // To map the categories
  private async mapCategories() {
    this.looId = this.$store.state.LooLoc.looDetail[0].id;
    this.categories = [...this.$store.state.LooLoc.category];
    this.getAminityDetails(this.looId);
  }
  // To fetch the aminities
  private async getAminityDetails(id: number) {
    await this.$store.dispatch(constants.AMINITYDETAILS, { id });
    if (this.$store.state.LooLoc.aminityDetail.length > 0) {
      this.showMap = true;
      this.aminityDetails = [...this.$store.state.LooLoc.aminityDetail];
    } else {
      this.showMap = false;
    }
    this.loader = false;
  }
  // To fetch the loo details
  private async getLooDetails(id: number) {
    this.loader = true;
    await this.$store.dispatch(constants.LOODETAILS, { id });
    if (this.$store.state.LooLoc.looDetail.length > 0) {
      this.showMap = true;
      this.looDetails = [...this.$store.state.LooLoc.looDetail];
      this.$router.push({ path: '/' });
    } else {
      this.showMap = false;
    }
    this.loader = false;
  }

  // To go back
  private goBack() {
    this.$router.push({ path: '/' });
  }
}
