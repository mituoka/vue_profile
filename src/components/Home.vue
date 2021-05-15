<template>
  <div class="home">
    <div class='top_image'>
      <div class='title_name'>{{title_name}}</div>
    </div>
    <contactform></contactform>
  </div>
</template>

<script>
import ContactFrom from './ContactForm'

export default {
  name: 'Home',
  data(){
    return{
      title_name:"Mitsuoka Tomohiro",
    }
  },
  components:{
    contactform:ContactFrom,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top_image{
  background-image: url(../assets/fruits4.jpg);
  height: 700px;
  background-size: auto;
  width: 100%;
}

.title_name{
  /* display: block; */
  font-family: 'Comic Sans MS';
  font-size: 50px;
  text-align: center;
  line-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact_form{
  text-align: left;
  width: 50%;
  margin: 20px auto;
}
.form_text{
  text-align: center;
}
</style>
