import { Component, Prop, Vue } from 'vue-property-decorator';
import { LooCategory } from '@/models/LooCategory';
import constants from '@/common/constants';

@Component({
  components: {},
})

export default class LooMenu extends Vue {
  private status: string = constants.CLOSE_MENU;
  private constants = constants;
  @Prop() private data!: LooCategory[];
  @Prop() private title!: string;
  // To close menu
  private closeNav() {
    this.status = constants.CLOSE_MENU;
  }
  // To open menu
  private openNav() {
    this.status = constants.OPEN_MENU;
  }
   // To close menu on selection
  private closeMenu(id: number) {
    this.status = constants.CLOSE_MENU;
    this.$emit('clicked', id);
  }
}
