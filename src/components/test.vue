<template>
  <div class="hello">
    <h2>计数：{{  count }}</h2>
    <test-button @click="test">测试</test-button>
  </div>
</template>

<script>
import { test  } from 'submodule/utils'
import { testButton } from 'submodule/components'

export default {
  name: 'HelloWorld',
  components: {
    testButton
    // 'testButton': () => import('submodule/components')
  },
  props: {
    msg: String
  },
  data(){
    return {
      count: 0
    }
  },
  methods:{
    test(){
      this.count = test(this.count, 1)
    }
  }
}
</script>

<style scoped>

</style>
