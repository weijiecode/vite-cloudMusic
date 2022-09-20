<template>
    <div class="screen">
        <!-- 标题 -->
        <div class="title">
            <div class="icon"></div>
            <span>编辑推荐</span>
        </div>
        <!-- 编辑推荐内容 -->
        <div class="rec">
            <div class="rec_item" v-for="item in recommendData" :key="item.id">
                <img :src="item.picUrl" alt="">
                <p>{{item.name}}</p>
            </div>
            <!-- <div class="rec_item">
                <img src="../../assets/1.jpeg" alt="">
                <p>这是一首好听的歌单这是一首好听的歌</p>
            </div>
            <div class="rec_item">
                <img src="../../assets/1.jpeg" alt="">
                <p>这是一首好听的歌单这是一首好听的歌</p>
            </div>
            <div class="rec_item">
                <img src="../../assets/1.jpeg" alt="">
                <p>这是一首好听的歌单这是一首好听的歌</p>
            </div>
            <div class="rec_item">
                <img src="../../assets/1.jpeg" alt="">
                <p>这是一首好听的歌单这是一首好听的歌</p>
            </div>
            <div class="rec_item">
                <img src="../../assets/1.jpeg" alt="">
                <p>这是一首好听的歌单这是一首好听的歌</p>
            </div> -->
        </div>
        <!-- 标题 -->
        <div class="title">
            <div class="icon"></div>
            <span>最新音乐</span>
        </div>
        <!-- 最新音乐 -->
        <ul class="newSong">
            <li>
                <p class="songName">我也曾是你</p>
                <p class="songInfo">
                    <icon class="sq_icon"></icon>
                    张杰-福
                </p>
                <playicon></playicon>
            </li>
            <li>
                <p class="songName">我也曾是你</p>
                <p class="songInfo">
                    <icon class="sq_icon"></icon>
                    张杰-福
                </p>
                <playicon></playicon>
            </li>
            <li>
                <p class="songName">我也曾是你</p>
                <p class="songInfo">
                    <icon class="sq_icon"></icon>
                    张杰-福
                </p>
                <playicon></playicon>
            </li>
            <li>
                <p class="songName">我也曾是你</p>
                <p class="songInfo">
                    <icon class="sq_icon"></icon>
                    张杰-福
                </p>
                <playicon></playicon>
            </li>
            <li>
                <p class="songName">我也曾是你</p>
                <p class="songInfo">
                    <icon class="sq_icon"></icon>
                    张杰-福
                </p>
                <playicon></playicon>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { recommendApi } from '../../request/home'

const stateData = reactive({
    recommendData: [{
        id: 0,
        name: '',
        picUrl: '',
        playCount: 0
    }]
})

const { recommendData } = toRefs(stateData)
recommendApi().then(res => {
    console.log(res)
    recommendData.value = res.result
})
</script>  

<style lang="scss" scoped>
.screen {
    width: 100%;
}

.title {
    margin-top: 10px;
    margin-bottom: 10px;
}

.icon {
    background-color: red;
    width: 4px;
    height: 20px;
    float: left;
    margin-right: 10px;
}

.rec {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* 一行排不下了自动到下一行 */
    flex-wrap: wrap;
}

.rec_item {
    width: 32.5%;
}

.rec_item>img {
    width: 100%;
}

.rec_item>p {
    margin-top: 0;
    margin-bottom: 15px;
    width: 100%;
    font-size: 12px;
    text-align: center;
}

.openimg {
    width: 22px;
    height: 22px;
    border: 2px solid red;
    background: url(../../assets/index_icon_2x.png);
    background-size: 166px 97px;
    background-position: -24px 0;
}

.newSong>li {
    list-style: none;
    height: 55px;
    padding-top: 8px;
    padding-left: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
    position: relative;
    z-index: 1000;
}

.songName {
    margin-bottom: 4px;
}

.songInfo {
    color: gray;
    font-size: 12px;

}

.sq_icon {
    display: inline-block;
    width: 12px;
    height: 8px;
    background: url(../../assets/index_icon_2x.png);
    background-size: 166px 97px;
    background-position: 0 0;
}

playicon {
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(../../assets/index_icon_2x.png);
    background-size: 166px 97px;
    background-position: -24px 0;
    position: absolute;
    top: 25px;
    right: 15px;
    transform: translateY(-50%);
}
</style>