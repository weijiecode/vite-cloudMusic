<template>
    <div class="content">
        <el-button type="primary">Primary</el-button>
        <div class="menu">
            
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { homeApi } from '../../request/home'

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
    .content {
        .menu {
            width: 10px;
            height: 10px;
            background-color: #efefef;
        }
    }
</style>