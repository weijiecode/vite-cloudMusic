<template>
    <!-- 导航栏 -->
    <div class="nav">
        <div @click="toRecommend" :class="{navBtn:true,red:rpath==='推荐音乐'}">推荐音乐<div v-show="rpath==='推荐音乐'" class="line"></div>
        </div>
        <div @click="toHot" :class="{navBtn:true,red:rpath==='热歌榜'}">热歌榜<div v-show="rpath==='热歌榜'" class="line"></div>
        </div>
        <div @click="toSearch" :class="{navBtn:true,red:rpath==='搜索'}">搜索<div v-show="rpath==='搜索'" class="line"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const rpath = ref('推荐音乐')
router.push('/recommend')
rpath.value = '推荐音乐'
const toRecommend = () => {
    router.push('/recommend')
    rpath.value = '推荐音乐'
}

const toHot = () => {
    router.push('/hot')
    rpath.value = '热歌榜'
}

const toSearch = () => {
    router.push('/search')
    rpath.value = '搜索'
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

.line {
    width: 55%;
    border: 1px solid #dd001b;
    margin: 0 auto;
}

.red {
    color: #dd001b;
}
</style>