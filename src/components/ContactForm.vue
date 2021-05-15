<template>
  <div class="home">
    <div class='contact_form'>
        <div class='form_text'>
        <!-- <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation> -->
        <label class='form_lavel'>お名前</label>     
        <input
          id="title"
          type="text"
          v-model.trim="contact_information.title"
        >
        </div>
        <div class='form_text'>
        <label class='form_lavel'>ご連絡用アドレス</label> 
        <input
          id="address_for_contact"
          type="text"
          v-model.trim="contact_information.address_for_contact"
        >
        </div>
        <div class='form_text'>
        <label class='form_lavel'>件名</label>
        <input
          id="subject"
          type="text"
          v-model.trim="contact_information.subject"
        >
        </div>
        <div class='form_text'>
        <label class='form_lavel'>内容</label>
        <textarea
          id="content"
          rows="10"
          cols="70"
          v-model.trim="contact_information.content"
        >
        </textarea>
        </div>
      <button class='submit_button' v-on:click='Email_Sending'>送信</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      contact_information:{
        title:'',
        address_for_contact:'',
        subject:'',
        content:''
      }
    }
  },
  methods: {
    Email_Sending(){
      console.log(this.contact_information.title);
      console.log(this.contact_information.address_for_contact);
      console.log(this.contact_information.subject);
      console.log(this.contact_information.content);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact_form{
  text-align: left;
  display: flex;
  flex-flow: column;
  width: 50%;
  margin: 20px auto;
}
.form_text{
  display: flex;
  padding: 2%;
  
}

.form_lavel{
  width: 150px;
}

.submit_button{
  width: 300px;
  margin: 0 auto;
}

</style>
