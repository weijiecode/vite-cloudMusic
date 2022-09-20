<template>
    <div class="container">
        <div class="info">
            <div @click="play" :class="playclass">
                <img src="../../assets/bg.jpeg" alt="">
            </div>

            <div class="songName">房东的猫</div>
            <div class="lyric">
                <p>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啊</p>
            </div>
        </div>
        <div class="bg">
            <img src="../../assets/bg.jpeg" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const playclass = ref('disk')
const play = () => {
    if(playclass.value === 'disk'){
        playclass.value = 'disk running'
    }else {
        playclass.value = 'disk'
    }
}


</script>

<style lang="scss" scoped>

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

.info {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1000;
}

.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 990;
}
.bg img{
    height: 120%;
    filter: blur(30px) brightness(0.7);
}

.disk {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: url(../../assets/disc_default.png) no-repeat;
    background-size: 100%;
    margin: 50px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 使用动画 */
    animation: roll 20s linear infinite;
    animation-play-state: paused;
}

.running {
    animation-play-state: running;
}

/* 定义动画 */
@keyframes roll {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

.disk img {
    width: 64%;
    border-radius: 50%;
}

.songName {
    color: white;
    text-align: center;
    margin: 15px 0;
    font-size: 16px;
}

.lyric {
    color: white;
    text-align: center;
    width: 60%;
    line-height: 1.5;
    margin: auto;
}
</style>