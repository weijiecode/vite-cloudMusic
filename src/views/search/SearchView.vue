<template>
    <div class="screen">
        <!-- 搜索页面 -->
        <div class="searchBox">
            <!-- 搜索输入框 -->
            <input v-model="searchinput" @keyup="inputkey" placeholder="请搜索歌曲、歌手、专辑" id="searchInput" type="text">
        </div>


        <!-- 默认搜索页 -->
        <div class="searchContainer">
            <!-- 默认搜索页 -->
            <div class="searchDefault" v-show="hotbox">
                <p class="title">热门搜索</p>
                <div class="search_hot">
                    <!-- axios获取数据 -->
                    <span v-for="item in hots" :key="item.first">
                        {{item.first}}
                    </span>
                </div>
                <div class="search_value">
                    <!-- 记录搜索数据 -->
                    <ul>
                        <li v-for="item in singerArr" :key="item">
                            <span>{{item}}</span>
                            <span class="delbtn" @click="del(item)">✖️</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 搜索推荐页 -->
            <div class="searchRec" v-show="recbox">
                <ul>
                    <li v-for="item in searchData" :key="item.keyword">
                        <span>{{item.keyword}}</span>
                    </li>
                </ul>
            </div>
            <!-- 搜索结果页 -->
            <div class="searchResult" v-show="resultbox">
                <ul class="newSong">
                    <li @click="toPlay(item.id)" v-for="item in searchList" :key="item.id">
                        <p class="songName">{{item.name}}</p>
                        <p class="songInfo">
                            <icon class="sq_icon"></icon>
                            {{getName(item.ar)}}-{{item.al.name}}
                        </p>
                        <playicon></playicon>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { getHots, getSearch, getsong } from "../../request/search";
import { useRouter } from 'vue-router'

const state = reactive({
    hots: [{
        first: ''
    }],
    hotbox: true,
    recbox: false,
    resultbox: false,
    searchinput: '',
    // 缓存数据
    singerArr: [] as string[],
    // 推荐搜索数据
    searchData: [{
        keyword: ''
    }],
    // 搜索数据
    searchList: [
        {
            id: 0,
            name: '',
            al: {
                name: ''
            },
            ar: [{
                name: ''
            }]
        }
    ]
})

const { hots, hotbox, recbox, resultbox, searchinput, singerArr, searchData, searchList } = toRefs(state)

const router = useRouter()
const toPlay = (id: number) => {
    router.push({
        path: '/play',
        query: {
            id: id
        }
    })
}

getHots().then(res => {
    if (res.code === 200) {
        hots.value = res.result.hots
    }
})

if (localStorage.getItem("singer")) {
    singerArr.value = JSON.parse(localStorage.getItem("singer") || '')
}

// 键盘按下
const inputkey = (e: any) => {
    console.log(e.keyCode)
    if (searchinput.value != "") {
        if (e.keyCode === 13) {
            hotbox.value = false
            recbox.value = false
            resultbox.value = true
            console.log("结果页")
            // 离线存储数据
            // 判断是否有离线存储
            if (localStorage.getItem("singer")) {
                singerArr.value = JSON.parse(localStorage.getItem("singer") || '')
            }
            // 判断是否有重复
            if (!singerArr.value.includes(searchinput.value)) {

                singerArr.value.push(searchinput.value)
                localStorage.setItem('singer', JSON.stringify(singerArr.value))
            }
            getlist(searchinput.value)
        } else {
            hotbox.value = false
            recbox.value = true
            resultbox.value = false
            console.log("推荐页", recbox.value)
            getInputSearch(searchinput.value)
        }
    } else {
        hotbox.value = true
        recbox.value = false
        resultbox.value = false
        console.log("默认显示页")
    }
    console.log("推荐1页", recbox.value)
}

// 获取搜索推荐数据
const getInputSearch = (params: string) => {
    getSearch(params).then(res => {
        searchData.value = res.result.allMatch
        console.log('搜索推荐数据',searchData.value)
    })
}

// 获取搜索数据
const getlist = (params: string) => {
    getsong(params).then(res => {
        searchList.value = res.result.songs
        console.log('搜索推荐数据',searchList.value)
    })
}

// 删除搜索记录
const del = (item: string) => {
    singerArr.value = JSON.parse(localStorage.getItem("singer") || '')
    singerArr.value.forEach((subitem, index) => {
        if (item === subitem) {
            singerArr.value.splice(index, 1)
        }
    })
    localStorage.setItem('singer', JSON.stringify(singerArr.value))
}

// 封装歌手拼接方法
const getName = (params: { name: string }[]) => {
    let str = ''
    params.forEach(subitem => {
        str += subitem.name + " / "
    })
    str = str.slice(0, str.length - 2)
    return str
}


</script>

<style scoped>
.searchBox {
    height: 60px;
    /* border-bottom: 1px solid #efefef; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.searchBox>input {
    width: 90%;
    height: 30px;
    border-radius: 40px;
    background-color: #efefef;
    border: none;
    padding: 10px;
    box-sizing: border-box;
}

/* .searchRec,
.searchResult {
    display: none;
} */

.title {
    padding: 10px;
    color: rgb(77, 77, 77);
    font-size: 14px;
}

.search_hot {
    padding: 0px 10px;
    display: flex;
    flex-wrap: wrap;
}

.search_hot span {
    padding: 8px;
    border: 1px solid #efefef;
    border-radius: 20px;
    font-size: 12px;
    margin: 5px;
    color: gray;
}

.search_value {
    margin-top: 15px;
}

.search_value>ul>li,
.searchRec>ul>li {
    padding: 10px 25px;
    box-sizing: border-box;
    border-bottom: 1px solid #e1e1e1;
    color: gray;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
}

.delbtn {
    width: 25px;
    height: 25px;
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