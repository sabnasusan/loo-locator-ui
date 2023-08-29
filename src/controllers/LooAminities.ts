// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import LooAminityDetails from '@/components/LooAminityDetails.vue';

@Component({
  components: {
    LooAminityDetails,
  },
})

export default class LooAminities extends Vue {}


