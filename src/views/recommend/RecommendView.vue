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
        </div>
        <!-- 标题 -->
        <div class="title">
            <div class="icon"></div>
            <span>最新音乐</span>
        </div>
        <!-- 最新音乐 -->
        <ul class="newSong">
            <li @click="toPlay(item.id)" v-for="item in newMusicData" :key="item.id">
                <p class="songName">{{item.name}}</p>
                <p class="songInfo">
                    <icon class="sq_icon"></icon>
                    {{getName(item.song.artists)}}-{{item.song.album.name}}
                </p>
                <playicon></playicon>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { getRecommend, getNewMusic } from '../../request/home'

const stateData = reactive({
    recommendData: [{
        id: 0,
        name: '',
        picUrl: '',
        playCount: 0
    }],
    newMusicData: [{
        id: 0,
        name: '',
        song: {
            artists: [{
                name: ''
            }],
            album: {
                name: ''
            }
        }
    }]
})

const { recommendData, newMusicData } = toRefs(stateData)
// 获取推荐歌单
getRecommend().then(res => {
    console.log("推荐歌单:", res)
    recommendData.value = res.result
})

// 获取最新音乐
getNewMusic().then(res => {
    newMusicData.value = res.result
    console.log(newMusicData.value)
    console.log("最新音乐:", res)
})

// 封装歌手拼接方法
const getName = (params: { name: string }[]) => {
    let str = ''
    params.forEach(subitem => {
        str += subitem.name + " / "
    })
    str = str.slice(0, str.length - 2)
    return str
}

// 跳转到播放页面
const router = useRouter()
const toPlay = (id: number) => {
    router.push({
        path: '/play',
        query: {
            id: id
        }
    })
}
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

.newSong>li>p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
}

.songName {
    margin-bottom: 4px;
    height: 22.5px;
}

.songInfo {
    color: gray;
    font-size: 12px;
    height: 16.5px;
    overflow: hidden;
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