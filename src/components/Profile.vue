<template>
  <div class="profile">
      <img src="@/assets/profile_img.jpg" class='profile_icon'>
      <div class='my_name'>{{my_name}}</div>
      <div class='hobby'>
        <ul>
          <li class='hobby_item' v-for="(content,item) in hobby_list " :key="item">
            <div class='item_name'>{{item}}</div>
            <div class='content_name'>{{content}}</div>
          </li>
        </ul>
      </div>
      <div class='link_form'>
        <p>各種アカウントリンク</p>
        <ul>
          <li class='link_list' v-for="(content,item) in link_list " :key="item">
            <a v-bind:href="content">{{item}}</a>
          </li>
        </ul>        
      </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      hobby_list:{
        '読書':'主にデザイン・プログラミング・仕事効率化関係の本を中心に読んでいます。たまに短編小説も読みます。',
        // 'ゲーム':'スマホゲームでは原神とにゃんこ戦争にはまっています。Switchではたまにモンハンとスマブラしてます。',
        '筋トレ':'家に10kgと5kgのダンベルと腹筋ローラーがあり、腕と腹筋をメインに筋トレをしています。',
        // 'IT':'Python関係とJavascriptのフレームワークに興味があります。主にudemyでインプットを行なっています。Outputとしてポートフォリオやアプリを作成しています。',
      },
      link_list:{
        'Qiita':'https://qiita.com/Aqua_MT',
        'Twitter':'https://twitter.com/IT51498061',
        'GitHub':'https://github.com/mituoka',
        'tetatail':'https://teratail.com/users/TOMOHIROMITUOKA/Question#question',
      },
      my_name:"光岡知洋(Mitsuoka Tomohiro)"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.profile {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

.profile_icon{
  margin-top:20px;
  border-radius: 50%;
  width: 20%;
}

.hobby ul{
  list-style: none;
  text-align: left;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.hobby li{
  margin: 10px;
}

.item_name{
  text-align: center;
  font-size: 24px;
  background-color: rgba(244, 156, 45, 0.8);
  border-radius: 3%;
}

.content_name{
  font-size: 16px;
  height: 300px;
  width: 10%px;
  background-color: rgba(255, 238, 125, 0.8);
  border-radius: 3%;
}

.link_form ul{
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
}


</style>