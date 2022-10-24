<template>
<div id="pozadina" style="background:rgb(216, 209, 231);">
  <div id="app">
    <nav id="nav1">
    <nav class="navbar navbar-expand-lg navbar-light">

  <div class="container-fluid" id="nav2">
      <p id="naziv"><i><b>Scape</b></i></p>

  <div class="collapse navbar-collapse" id="navbarToggledDemo02">
    <ul class="navbar-nav ml-auto">
      <router-link id="link" to="/AboutUs">About Us</router-link>
      <router-link  id="link" to="/BettaOffer">Bettas</router-link>
      <router-link  id="link" to="/TetraOffer">Tetras</router-link>
      <router-link  id="link" to="/RasboraOffer">Rasboras</router-link>
      <router-link v-if="store.currentUser" id="link" to="/MyFavorites">My Favorites</router-link>
      <router-link v-if="!store.currentUser" id="link2" to="/signup">Sign-Up</router-link>
      <router-link v-if="!store.currentUser" id="link2" to="/login">Log-in</router-link>
      <a v-if="store.currentUser" href="#" @click="logout()" id="link2">Log-out</a>
    </ul>
  </div>
  </div>
    </nav>
    </nav>
  <router-view/> 
  </div>
</div>
</template>

<script>
document.body.style.backgroundColor="rgb(216, 209, 231)";
import store from '@/store';
import router from '@/router';
import { firebase } from '@/firebase';
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

onAuthStateChanged(auth, user => {
  
  const currentRoute = router.currentRoute;
  
  if(user) {
    store.currentUser = user.email;
  }
  else{
    console.log("**** no user");
    store.currentUser = null;    
  }

});

export default {
  name:'app',
  data(){
    return{
      store,
    };
  },
  methods: {
    logout(){
      const auth = getAuth().signOut().then(() => {
          this.$router.push({ name: 'login' });
      });
    },
  },
};
</script>


<style lang="scss">
  
#app{
font-family:'Times New Roman', Times, serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #ffffff;
}

#nav1{
padding: 30px;
background-color: rgb(216, 209, 231);
}

#nav2{
  padding:1px;
  background-color:rgb(93, 92, 165);
  border-radius:15px;
}

#naziv{
  text-align: center;
  font-size: 50px;
  margin: 30px 30px 30px 80px;
}
 
#link{
  color: rgb(216, 209, 231);
  margin-left:50px;
  font-size: 17px;
  font-family:'Times New Roman', Times, serif;
}
#link2{
  color: rgb(216, 209, 231);
  margin-left:50px;
  font-size: 17px;
  font-family:'Times New Roman', Times, serif;

}



</style>