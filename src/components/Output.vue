<template>
  <div class="output">
    <div class="content" v-for="portfolio in portfolio_list" :key=portfolio>
      <div class='portfolio_title'>{{portfolio.title}}</div>
      <div class='portfolio_content'>
        <img v-bind:src='portfolio.image_url' class='portfolio_image'>
        <!-- <img src="@/assets/hobbymanegement.jpg" class='portfolio_image'> -->
        <!-- <v-img v-bind:src='portfolio.image_url' class='portfolio_image'></v-img> -->
        <div>
          <div class='portfolio_url'>使用技術：{{portfolio.use_technology}}</div>
          <div class='portfolio_url'>{{portfolio.description}}</div>
        </div>
      </div>
      <a v-bind:href='portfolio.url' class='portfolio_url'>リンク</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {
      portfolio_list:{
        portfolio1:{
          title:'Hobby manegiment',
          image_url:'@/assets/hobbymanegement.jpg',
          use_technology:'Django(Python),HTML・CSS,Ajax,S3(AWS),heroku',
          description:'写真投稿を文章と一緒に投稿し管理できるサイトカテゴリー名で分類できajaxでのカテゴリー検索機能をつけている。ユーザIDとパスワードは制限をかけているのでご連絡ください',
          url:'https://hobbymanagement.herokuapp.com/'
        },
        portfolio2:{
          title:'a2',
          image_url:'b2',
          description:'c2',
          url:'d2'
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

.portfolio_title{
  margin: auto;
  width: 30%;
}

.portfolio_content{
  display: flex;
  justify-content: space-between;
}

.portfolio_url{
  background-color: aqua;
}

.portfolio_image{
  background-color: gold;
  width: 300px;
}


</style>