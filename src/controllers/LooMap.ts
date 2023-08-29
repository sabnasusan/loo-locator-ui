import { Component, Prop, Vue } from 'vue-property-decorator';
import TheNavBar from '@/loo-components/TheNavBar.vue';
import LooBackButton from '@/loo-components/LooBackButton.vue';
import LooLoader from '@/loo-components/LooLoader.vue';
import LooMenu from '@/loo-components/LooMenu.vue';
import LooMapWay from '@/components/LooMapWay.vue';
import { LooCategory } from '@/models/LooCategory';
import { LooDetails } from '@/models/LooDetails';
import constants from '@/common/constants';

@Component({
  components: {
    TheNavBar,
    LooBackButton,
    LooMapWay,
    LooMenu,
    LooLoader,
  },
})
export default class LooMap extends Vue {
  @Prop() private msg!: string;

  private categories: LooCategory[] = [];
  private looDetails: LooDetails[] = [];
  private constants = constants;
  private showMap: boolean = true;
  private loader: boolean = true;
  private defaultLoo: number = constants.DEFAULTCATEGORY;

  // Fetching categories and loo details on load
  private created() {
    if (this.$store.state.LooLoc.category.length !== 0 || this.$store.state.LooLoc.looDetail.length !== 0) {
      this.showMap = true;
      this.loader = false;
      this.categories = [...this.$store.state.LooLoc.category];
      this.looDetails = [...this.$store.state.LooLoc.looDetail];
    } else {
      this.showMap = false;
      this.getCategories();
      this.getLooDetails(this.defaultLoo);
    }
  }

  private async getCategories() {
    await this.$store.dispatch(constants.CATEGORIES);
    this.categories = [...this.$store.state.LooLoc.category];
  }

  private async getLooDetails(id: number) {
    await this.$store.dispatch(constants.LOODETAILS, { id });
    if (this.$store.state.LooLoc.looDetail.length > 0) {
      this.showMap = true;
      this.looDetails = [...this.$store.state.LooLoc.looDetail];
    } else {
      this.showMap = false;
    }
    this.loader = false;
  }
  // To back
  private goBack() {
    this.$router.push({ path: '/' });
  }
}
