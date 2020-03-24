<template>
<div style="background:#f6f9f9;">

<h1 class="welcome">Hello and welcome to our site!</h1>

<p class="txt">We are a team of young programmers whose main purpose is to reduce the traffic jams and improve the quality of life which is affected by the high pollution in our cities. </p>

   <h1 class="adaptive">How important do you think adaptive traffic is?</h1>
    <v-row>
        <v-col cols="4.5"></v-col>

<v-col cols="1"><v-btn icon class="semafor"  target="_blank"  v-on:click="clickred()"><v-img  width="70" src="./images/rosu.png"><div class="my-2" v-if="!pred">Not</div> <v-img v-else  src="./images/flash1.png" height="70"></v-img></v-img></v-btn></v-col>

<v-col cols="1"><v-btn icon class="semafor" target="_blank"  v-on:click="clickyellow()"><v-img width="70" src="./images/galben.png"><div class="my-2" v-if="!pred2">Medium</div> <v-img v-else  src="./images/flash2.png" height="70"></v-img></v-img></v-btn></v-col>
<v-col cols="1"><v-btn icon class="semafor" target="_blank"  v-on:click="clickgreen()"><v-img width="70" src="./images/green.png"><div class="my-2" v-if="!pred3">Very</div> <v-img v-else  src="./images/flash3.png" height="70"></v-img></v-img></v-btn></v-col>
<v-col cols="4.5"></v-col>
</v-row>

<v-row>
    <v-col cols="4"></v-col>
    <v-col cols="2"></v-col>
   <v-col col="1"> 
    <v-img v-if="pred || pred2 || pred3" width="300" src="./images/bub.png"><div class="text" v-if="pred">Are you aware of the fact that you are losing a lot of time in traffic daily due to the over-crowded streets?</div>
     <div class="text" v-if="pred2">Medium, not bad, but not good either. Don't you prefer saving your time for more important things than waiting in a line?</div>
      <div class="text" v-if="pred3">Great answer! You should definitely check our product out! It might be just what you need!</div></v-img></v-col>
    <v-col cols="1"></v-col>
     <v-col cols="4"></v-col>
</v-row>

<v-row>
   <v-col cols="4"></v-col>
    <v-col cols="1"></v-col>
   <v-col cols="1"> <v-img class="omulet" src="./images/omulet.png"></v-img></v-col>
  
   <v-col cols="4"></v-col>
</v-row>


  
  



</div>
</template>

<style>
.home {
    font-family: Montserrat;
    text-align: center;
    color: grey;


}

.semafor{
 display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: center;
  color: white;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 20%
  
  
}



.adaptive{
  font-family: Montserrat;
    text-align: center;
    color: grey;
    padding-top:20px;

}

.text{

    padding-top:51px;
    padding-left: 62px;
    padding-right: 15px;
    
}

.welcome{

 padding-top: 20px;
 color: grey;
 text-align: center;
 font-family: Montserrat;

}

.txt{

    padding-top: 20px;
    text-align: center;
}

.my-2{
     color: white;
     padding-top: 20px; 
     font-weight: bold;

}


</style>

<script>
/* eslint-disable */
import Vue from 'vue'

let home = {
    name:'home',
   
  

    data(){
        
         return { pred:false,
                  pred2:false,
                  pred3:false
            

         }
    },

    methods:{
             
		clickred(){ 
			this.pred=!this.pred;
            this.pred2=false;
            this.pred3=false;   

        },
        
        	clickyellow(){ 
			this.pred=false;
            this.pred2=!this.pred2;
            
            this.pred3=false;   

        },
        
        	clickgreen(){ 
                this.pred=false;
                this.pred2=false;
			this.pred3=!this.pred3;
            

		},
        }

    }

Vue.component(home.name,home)
 export default home;

</script>