<script lang="tsx">
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class Layout extends Vue{
  mounted() {
    console.log('Layou init')
  }
  
  methods: {
    
  }

  render(h) {
    return (
      <div>Layout</div>
    )
  }
}

</script>
