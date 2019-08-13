import {Vue, Component} from 'vue-property-decorator'
import template from './home.vue'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
    name: 'home',
    mixins: [template],
    components: {HelloWorld}
  })
export default class Home extends Vue{
}
