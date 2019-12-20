<template>
  <div>Layout</div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class Layout extends Vue{
  mounted() {
    console.log('Layou init')
  }
  
  methods: {
    
  }
}

</script>
