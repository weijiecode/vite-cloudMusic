<template>
    <div class="content">
        <div class="toHeader">
            <Header></Header>
            <Nav></Nav>
        </div>
        <router-view class="toContent"></router-view>
    </div>
</template>

<script lang="ts" setup>
import Header from './component/header.vue';
import Nav from './component/nav.vue';

</script>

<style lang="scss" scoped>
.toHeader {
    width: 100%;
    position: fixed;
    top: 0;
}

.toContent {
    margin-top: 135px;
}
</style>