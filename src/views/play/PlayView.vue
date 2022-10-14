<template>
    <!-- audio是否可见是controls属性，去除为不可见 -->
    <audio id="myAudio" ref="audio" :src="musicurl" @timeupdate="onTimeupdate" @canplay="onLoadedmetadata"></audio>
    <div class="container">
        <div class="info">
            <div :class="playclass" @click="play">
                <!-- 唱片图 -->
                <img id="diskImg" :src="picUrl" alt="">
            </div>
            <!-- 歌曲名 -->
            <div class="songName">{{name}}</div>
            <div class="lyric">
                <p>{{lrc}}</p>
            </div>
            <!-- 快进快退 -->
            <input type="range" id="range" class="range" value="0">
        </div>
        <div class="bg">
            <img id="bgImg" :src="picUrl" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"
import { useRoute } from 'vue-router'
import { getMusicUrl, getMusicdetail, getlyric } from '../../request/home'


const audio = ref<null | HTMLAudioElement>(null)

const playclass = ref('disk')
const play = () => {
    // 判断是否加载完成
    audio.value?.onloadedmetadata
    if (playclass.value === 'disk') {
        playclass.value = 'disk running'
        audio.value?.play()
    } else {
        playclass.value = 'disk'
        audio.value?.pause()
    }
}

// 获取路由传过来的参数
const route = useRoute()
const musicId = ref('')
if (typeof (route.query.id) === 'string') {
    musicId.value = route.query.id
}

// 获取音频地址
const musicurl = ref('')
getMusicUrl(musicId.value).then(res => {
    // console.log("音频地址：",res.data[0].url)
    musicurl.value = res.data[0].url
})

// 获取音乐名、专辑
const musicdetail = reactive({
    name: '',
    picUrl: ''
})
let { name, picUrl } = toRefs(musicdetail)
getMusicdetail(musicId.value).then(res => {
    // console.log("歌曲详情：", res)
    if (res.code === 200) {
        name.value = res.songs[0].al.name
        picUrl.value = res.songs[0].al.picUrl
    }
})

// 获取歌词
const lrc = ref('')
getlyric(musicId.value).then(res => {
    console.log("歌词：", res)
    if (res.code === 200) {
        lrc.value = res.lrc.lyric
    }
})

// 检测歌曲是否加载完成
const onLoadedmetadata = (res: Event) => {
    console.log("加载完成", res)
}

// 进度条
const onTimeupdate = (res: any) => {
    // state.audio.currentTime = res.target.currentTime;
    // console.log(state.audio.currentTime)
    // state.sliderTime = parseInt(
    //     (state.audio.currentTime / state.audio.maxTime) * 100
    // );
    // state.sliderTime= formatProcessToolTip(state.sliderTime)
    console.log(res)
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

.bg img {
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
    0% {
        transform: rotate(0deg);
    }

    100% {
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

.range {
    position: fixed;
    bottom: 30px;
    width: 60%;
    left: 50%;
    transform: translateX(-50%)
}
</style>