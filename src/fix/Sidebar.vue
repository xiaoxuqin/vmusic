<template>
  <div id="sidebar">
    <div>
        <p>推荐</p>
        <ul class="list">
            <a href="/#/find"><li>发现音乐</li></a>
            <a href=""><li>私人FM</li></a>
            <a href=""><li>LOOK直播</li></a>
            <a href=""><li>视频</li></a>
            <a href=""><li>朋友</li></a>
        </ul>
    </div>
    <div>
        <p>我的音乐</p>
        <ul class="list">
            <a href=""><li>本地音乐</li></a>
            <a href=""><li>下载管理</li></a>
            <a href=""><li>我的音乐云盘</li></a>
            <a href=""><li>我的电台</li></a>
            <a href=""><li>我的收藏</li></a>
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
    height: 500px;
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
