<template>
  <div id="sidebar">
    <div>
        <p>推荐</p>
        <ul class="list">
            <router-link to="/find"><li>发现音乐</li></router-link>
            <router-link to="/private"><li>私人FM</li></router-link>
            <router-link to="/looklive"><li>LOOK直播</li></router-link>
            <router-link to="/video"><li>视频</li></router-link>
            <router-link to="/friend"><li>朋友</li></router-link>
        </ul>
    </div>
    <div>
        <p>我的音乐</p>
        <ul class="list">
            <router-link to=""><li>本地音乐</li></router-link>
            <router-link to=""><li>下载管理</li></router-link>
            <router-link to=""><li>我的音乐云盘</li></router-link>
            <router-link to=""><li>我的电台</li></router-link>
            <router-link to=""><li>我的收藏</li></router-link>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'Sidebar'
    }
</script>

<style>
#sidebar{
    width: 180px;
    height: 550px;
    background-color: rgb(245,245,247);
    margin:0;
}
#sidebar a{
    color: rgb(109, 101, 101);
}
#sidebar a:focus{
    color: black;
}
#sidebar li{
    line-height: 30px;
    font-size: 13px;
}
#sidebar .list{
    margin-left: 40px;
    margin-bottom: 10px;
}
#sidebar p{
    font-size: 12px;
    padding: 5px 5px;
}

</style>
