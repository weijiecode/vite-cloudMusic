<template>
    <!-- 导航栏 -->
    <div class="nav">
        <div @click="toRecommend" class="navBtn" id="navOne">推荐音乐</div>
        <div @click="toHot" class="navBtn" id="navTow">热歌榜</div>
        <div @click="toSearch" class="navBtn" id="navThree">搜索</div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const toRecommend = () => {
    router.push('/recommend')
}

const toHot = () => {
    router.push('/hot')
}

const toSearch = () => {
    router.push('/search')
}


</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #efefef;
    background-color: white;
}

.navBtn {
    width: 33.33%;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
}
</style>