<template>
  <div>

    <v-tabs right background-color="teal lighten-3" dark icons-and-text v-model="tab">
        <v-col cols="1">
 <v-btn text href="http://localhost:8080" target="_blank">
        <span left class="mr-2">
          <v-img width="60" src="./images/LOGO.png"></v-img>
        </span>
      </v-btn>
        </v-col>
        <v-col cols="1"><h1 class="car">Car to Car</h1></v-col>
        <v-col cols="4"></v-col>

          <v-col cols="3">
          <v-text-field
            v-model="message2"
            solo
            label="Search"
            clearable
          ></v-text-field>
        </v-col>
   
     
       <v-tab v-for="item in items" :key="item.name"><v-col class="taburi" cols="3">{{item.name}}</v-col></v-tab>
   
    <v-tabs-items v-model="tab">
     <v-tab-item v-for="item in items" :key="item.name">
         
      <v-parallax
      height="250"
    dark
   
    src="./images/bla.jpg"
  >
    
  </v-parallax>

        <component :is="item.name"></component>
        
      </v-tab-item> 
    </v-tabs-items>
     </v-tabs>
  </div>
</template>
<style>

.car{

  font-family: Montserrat;
    text-align: center;
    color:white;
    text-align: left;
}

.taburi{

  text-align: center;
  padding-top: 20px;
  margin-right: 40px;
}

</style>

<script>
import home from "./home";
import contact from "./contact";
import about from "./about";
import team from "./team";

export default {
  data() {
    return {
      tab: null,
      items: [
        {
          name: home.name
        },

       

        {
          name: about.name
        },
        {
          name: team.name
        },
         {
          name: contact.name
        },
      
      ]
    };
  },
  components: {
    home,
    about,
    team,
    contact,
    
  }
};
</script>


