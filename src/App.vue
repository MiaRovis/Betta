<template>
<div id="pozadina" style="background:#c1c0c4fb">
  <div id="app">
    <nav id="nav1">
    <nav class="navbar navbar-expand-lg navbar-light">

  <div class="container-fluid" id="nav2">
      <p id="naziv"><i><b>Shumpoo</b></i></p>

  <div class="collapse navbar-collapse" id="navbarToggledDemo02">
    <ul class="navbar-nav1 me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <router-link id="link" to="/AboutUs">About Us</router-link>
    </li>
    <li class="nav-item">
      <router-link id="link" to="/ShampooOffer">Shumpoos</router-link>
    </li>
    <li v-if="!store.currentUser" class="nav-item">
      <router-link id="link2" to="/signup">Sign-Up</router-link>
    </li>
    <li v-if="!store.currentUser" class="nav-item">
      <router-link id="link2" to="/login">Log-in</router-link>
    </li>
    <li v-if="store.currentUser" class="nav-item">
      <a href="#" @click="logout()" id="link2">Log-out</a>
    </li>
  
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
document.body.style.backgroundColor="silver";
import store from '@/store';
import router from '@/router';
import { firebase } from '@/firebase';
import { currentUser, signOut, getAuth, onAuthStateChanged } from "firebase/auth";

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
background-color: #c1c0c4fb;
}

#nav2{
  padding:1px;
  background-color:rgb(120, 192, 188);
  border-radius:15px;
}

#naziv{
  text-align: center;
  font-size: 50px;
  margin: 30px 30px 30px 80px;
}
 
#link{
  color: rgb(61, 95, 93);
  margin-left:50px;
  font-size: 17px;
  font-family:fantasy;
}
#link2{
  color: rgb(61, 95, 93);
  margin-left:50px;
  font-size: 17px;
  font-family:fantasy;

}


</style>