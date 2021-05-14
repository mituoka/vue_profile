<template>
  <div class="skills">
    <div class="content" v-for="(content,skill) in skill_list" :key=skill>
    <div>
      <h3> {{ skill }} </h3>
      <p> {{ content }} </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      skill_list:{
        'python':'Djangoを使用したWEB開発の経験があります。AI分野を現在勉強中です',
        'HTML':'Adobe XDのデザインカンプからコーディングを行うことができます。',
        'CSS':'レスポンシブデザインでのページ作成が可能です。',
        'Javascript':'Vue.jsとReactを中心に学習中です',
        'SQL':'基本的なSQLはマスターしています',
        'AWS':'ECS、ELB,EC2,Cloud Watch,S3の運用経験があります',
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.skill {
  text-align: center;
}

div.content {
  background-color: #eee;
  /* display: inline-block; */
  display: inline-flex;
  margin: 10px;
  width: 30%;
  height: 300px;
}

h3 {
  color: white;
}

p {
  padding: 10px;
  display: inline-block;
  text-align: left;
}

</style>