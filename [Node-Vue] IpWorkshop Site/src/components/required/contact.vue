<template>
<div>
<h1 class="contact">Contact us</h1>



<v-container>
    <v-row> 
        <v-col cols="2"></v-col>
      <v-col
        cols="4">
      <p class="text-center">Write us at the form below.</p>
      
        <v-card
          class="pa-2"
          outlined
          tile
          color="rgb(255, 0, 0, 0)"
        >
         <form centered width='50'>
    <v-text-field 
      v-model="name"
      v-validate="'required|max:25'"
      :counter="25"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>

    <v-text-field
      v-model="message"
      v-validate="'required|message'"
      :error-messages="errors.collect('message')"
      label="Message"
      data-vv-name="message"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      v-validate="'required'"
      :error-messages="errors.collect('checkbox')"
      value="1"
      label="I agree to the terms and conditions."
      data-vv-name="checkbox"
      type="checkbox"
      required
    ></v-checkbox>

    <v-btn color='blue' class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
    
  </form>
        </v-card>
      </v-col>

<v-col
        cols="4"
    
      >
        <v-card
          class="pa-2"
          outlined
          tile
          color="rgb(255, 0, 0, 0)"
        >
        <v-card-content >
       <v-img class="text-center" width="700" src="./images/team.jpg"></v-img>
       </v-card-content>
        </v-card>
      </v-col>

      <v-col cols="2"></v-col>
    </v-row>

<v-card>



</v-card>


<!--<v-row>
      <v-col cols="4.5"></v-col>
        <v-col cols="1"></v-col>
         <v-col cols="1">Social Media</v-col>
         <v-col cols="1"></v-col>
         <v-col cols="4.5"></v-col>
         </v-row>-->

<v-row> <v-col cols="4.5"></v-col>
<v-col cols="1">
<v-btn icon href="http://www.facebook.com"><v-img src="./images/facebook.png" ></v-img></v-btn>
</v-col>
<v-col cols="1"><v-btn icon href="https://www.instagram.com/adaptivetraffic/">  <v-img contain src="./images/instagram.png" ></v-img></v-btn>
</v-col>
<v-col cols="1"><v-btn icon href="http://www.google.com">  <v-img src="./images/google_play.png" ></v-img></v-btn>
     </v-col>   
   <v-col cols="4.5"></v-col>

</v-row>
      
</v-container>
  



</div>
</template>

<style>

.thatimage{

    display: flex;
    align-items: center;
    justify-content: center;
}

.contact{
   padding-top: 20px;
   font-family: Montserrat;
    text-align: center;
    color: grey;
    padding-bottom: 20px;
}

</style>


<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  let contact = {
      name:'contact',
    $_veeValidate: {
      validator: 'new',
    },

    data() { 
        return{
      name: '',
      email: '',
      message: '',
      select: null,
      items: [
        
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address',
          message: 'Message',
         
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters',
          
          },
          select: {
            required: 'Select field is required',
          },
        },
      },
    }},

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.message = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      },
    },
  }
  
 export default contact;
</script>