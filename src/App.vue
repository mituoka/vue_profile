<template>
  <div id="app">
    <tabmenu></tabmenu>
    <router-view/>
  </div>
</template>

<script>
import TabMenu from './components/TabMenu.vue'

export default {
    name:'APP',
    components:{
      tabmenu:TabMenu
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,"Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  line-height: 1.8;
  font-size: 12px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html{
  background-color: rgba(196,215,0, 0.8);
}
</style>
