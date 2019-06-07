<template>
    <div class="header">
        <div class="header-left">
            <div class='iconfont icon-back'>&#xe624;</div>
        </div>
        <div class="header-input">
            <span class='iconfont'>&#xe632;</span>
            write
        </div>
        <div class="header-right">城市
            <span class='iconfont'>&#xe64a;</span>
        </div>
    </div>
</template>

<script>

export default {
     name:'HomeHeader'
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            float:left
            width: .64rem
            .icon-back
               text-align :center
               font-size: .6rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top : .12rem
            margin-left : .2rem
            padding-left : .2rem
            color: #ccc
            background #fff
            border-radius: .1rem
        .header-right
            width: 1.24rem
            float: right
            text-align :center

</style>
