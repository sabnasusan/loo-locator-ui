// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import LooMap from '@/components/LooMap.vue';

@Component({
  components: {
    LooMap,
  },
})

export default class Home extends Vue {}


