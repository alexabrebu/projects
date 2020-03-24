<template>
 
    
  <v-app>
  
    <!--<v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">      </v-toolbar-title>
       <v-spacer></v-spacer>
      <p class="text-center font-weight-thin purple--text  ">Car to car</p>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="http://localhost:8082"
        target="_blank"
      >
        <span class="mr-2">Home</span> 
      </v-btn>
    </v-app-bar>-->
      
   
  
<!--
      <h1  align="center"
      justify="center" class="display-2 font-weight-thick mb-4">Car to car</h1>-->
  
<v-content >

      <tabs/>


    </v-content>
  

  </v-app> 
  
    
</template>




<script>

import Tabs from './components/required/tabs'

export default {
  name: 'App',
  components: {
   
    Tabs
  },
  data(){
    return {


    }
  }
}
</script>
