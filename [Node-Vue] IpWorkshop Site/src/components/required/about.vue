
<template>
<div>
<h1 class="see">See for yourself how our product works.</h1>

<v-row>
    <v-col cols="3"></v-col>
    <v-col cols="3"><p class="text-center">The traffic lights set themselves depending on the number of cars that are in a queue.
      Here you can see a live representation of how the server works, with a coordinated data transmission. </p></v-col>
    <v-col cols="3">
         <v-card
          class="pa-2"
          outlined
          tile
        >
        Street1: {{Street1}} |
        Street2: {{Street2}}
        </v-card>
    </v-col>
    <v-col cols="3"></v-col>

</v-row>




 <p class="text-center">We're also taking into consideration how to cope with traffic jams during accidents. 
   We focus on smart traffic lights and a new software for self-driving cars. 
   Take a look at our prototype! </p>

    <v-row>
<v-col cols="2">

    </v-col>

    <v-col cols="8">
  <v-carousel
  
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
     v-for="(item,i) in items"
      :key="i"
      :src="item.src">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} </div>
        </v-row>
     
    </v-carousel-item>
  </v-carousel>
  </v-col>

  <v-col cols="2">


  </v-col>
  </v-row>
  </div>
</template>

<style>

.see{

   font-family: Montserrat;
    text-align: center;
    color: grey;
    padding-top:20px;
    padding-bottom: 20px;
}

.pa-2{

  text-align: center;
}
</style>

<script>
// eslint-disable-next-line no-unused-vars
const axios = require('axios');

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

let about = {
    name:'about',
   
  

    data(){

         return {
             items: [
          {src:require('./images/1.jpeg')},

             {src:require('./images/2.jpeg')},

             {src:require('./images/3.jpeg')},  

             {src:require('./images/4.jpeg')}, 

             {src:require('./images/5.jpeg')},
          
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        Street1:0,
        Street2:0

         }
    },

    methods:{
      getData(){

            this.$http.get('http://172.20.20.24:5000/login').then(
                response => {
                  this.Street1=response.body.Street1;
                  this.Street2=response.body.Street2;
                  // eslint-disable-next-line no-console
                  console.log(response.body.Street1);
                  // eslint-disable-next-line no-console
                  console.log(response.body.Street2);
                },
              error => {
            // handle error
            // eslint-disable-next-line no-console
            console.log(error);
        }
            )
    },
    update(){
			setInterval(() => {
				this.getData();
			}, 500);
			
		},
       
        },

        created(){
             this.update();

        }

    }

 export default about;

</script>

