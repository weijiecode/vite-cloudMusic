<template>
    <div class="screen">
        <!-- 搜索页面 -->
        <div class="searchBox">
            <!-- 搜索输入框 -->
            <input placeholder="请搜索歌曲、歌手、专辑" id="searchInput" type="text">
        </div>


        <!-- 默认搜索页 -->
        <div class="searchContainer">
            <!-- 默认搜索页 -->
            <div class="searchDefault">
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
                        <li>
                            <span></span>
                            <span>✖️</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 搜索推荐页 -->
            <div class="searchRec">搜索推荐页面</div>
            <!-- 搜索结果页 -->
            <div class="searchResult">搜索结果页面</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { getHots } from "../../request/search";

const state = reactive({
    hots: [{
        first: ''
    }]
})

const { hots } = toRefs(state)

getHots().then(res => {
    if (res.code === 200) {
        hots.value = res.result.hots
    }
    console.log(hots.value, '@')
})


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

.searchRec,
.searchResult {
    display: none;
}

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

.search_value>ul>li {
    padding: 10px 25px;
    box-sizing: border-box;
    border-bottom: 1px solid #e1e1e1;
    color: gray;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
}
</style>