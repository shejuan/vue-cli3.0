import {Vue, Component} from 'vue-property-decorator'
import template from './about.vue'

@Component({
    name: 'about',
    mixins: [template],
    components: {}
  })
export default class About extends Vue{
    Val = "hello world"
    Val = 1
}
