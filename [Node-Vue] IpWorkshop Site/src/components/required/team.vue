<template>
<div>

<h1 class="teamm">Meet our team!</h1>

    <v-row>
<v-col cols="4"></v-col>

<v-col cols ="4"></v-col>

<v-col cols ="4"></v-col>

</v-row>
   <v-row>
<v-col cols="3.5"></v-col>

<v-col cols ="1">
    <v-img src="./images/1-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/2-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/3-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/4-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/5-01.jpg"></v-img>
    
</v-col>

<v-col cols ="3.5"></v-col>

</v-row>

<v-row>

    <v-col cols ="3.5"></v-col>
<v-col class="text-center" cols ="1">Jane
    <v-spacer class="course">IOT</v-spacer>
</v-col>
<v-col class="text-center"  cols ="1">Christine
    <v-spacer class="course">IOT</v-spacer>
</v-col>
<v-col class="text-center" cols ="1">Meredith
    <v-spacer class="course">IOT</v-spacer>
</v-col>
<v-col class="text-center" cols ="1">James
    <v-spacer class="course">Robotics</v-spacer>
</v-col>
<v-col class="text-center" cols ="1">Dan
    <v-spacer class="course">Robotics</v-spacer>
</v-col>
<v-col cols="3.5"></v-col>
</v-row>




   <v-row>
       
<v-col cols="4.5"></v-col>

<v-col cols ="1">
    <v-img src="./images/6-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/8-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/7-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/9-01.jpg"></v-img>
    
</v-col>

<v-col cols ="4.5"></v-col>

</v-row>


<v-row>

    <v-col cols ="4.5"></v-col>
<v-col class="text-center" cols ="1">Martin
    <v-spacer class="course">Robotics</v-spacer>
</v-col>
<v-col class="text-center"  cols ="1">Jason
    <v-spacer class="course">Android</v-spacer>
</v-col>
<v-col class="text-center" cols ="1">Adele
    <v-spacer class="course">Web Development</v-spacer>
</v-col>
<v-col class="text-center" cols ="1">Samantha
    <v-spacer class="course">3-D Printing</v-spacer>
</v-col>
 <v-col cols ="4.5"></v-col>
</v-row>


<v-row>
<v-col cols="4.5">

</v-col>

<v-col cols ="1">
    <v-img src="./images/10-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/11-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/12-01.jpg"></v-img>
    
</v-col>
<v-col cols ="1">
    <v-img src="./images/1-01.jpg"></v-img>
    
</v-col>





<v-col cols="4.5">

</v-col>
</v-row>

<v-row>

    <v-col cols ="4.5"></v-col>
<v-col class="text-center" cols ="1">Josephine
    <v-spacer class="course">Business</v-spacer>
</v-col>
<v-col class="text-center"  cols ="1">Derek
    <v-spacer class="course">Photoshop</v-spacer>
</v-col>
<v-col class="text-center" cols ="1">Charles
    <v-spacer class="course">Security</v-spacer>
</v-col>
<v-col class="text-center" cols ="1">Luna
    <v-spacer class="course">Security</v-spacer>
</v-col>
 <v-col cols ="4.5"></v-col>
</v-row>

</div>
</template>

<style>
.teamm{

    font-family: Montserrat;
    text-align: center;
    color: grey;
    padding-top: 20px;
}

.course{
   font-style:italic;
   font-weight: bold;

}

</style>

<script>

import Vue from 'vue'

let team = {
    name:'team',
   
  

    data(){

         return {
            

         }
    },

    methods:{
       
        }

    }

Vue.component(team.name,team)
 export default team;

</script>