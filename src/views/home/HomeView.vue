<template>
    <div class="content">
        <Header></Header>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { homeApi } from '../../request/home'
import Header from './component/header.vue'

const state = reactive({
    blocks: []
})

let { blocks } = toRefs(state)
homeApi().then( res => {
    if(res.code === 200) {
       blocks.value = res.data.blocks
       console.log(blocks.value)
    }
} )

</script>

<style lang="scss" scoped>
</style>