<template>
<div id="pozadina" style=background:#c1c0c4fb;>
  <div id="app">
    <nav id="nav1">
    <nav class="navbar navbar-expand-lg navbar-light">

  <div class="container-fluid" id="nav2">
      <p id="naziv"><i><b>Shumpoo</b></i></p>

  <div class="collapse navbar-collapse" id="navbarToggledDemo02">
    <ul class="navbar-nav1 me-auto mb-2 mb-lg-0">
      <router-link id="link4" to="/AboutUs">About Us</router-link>
      <router-link id="link1" to="/ShampooOffer">Shumpoos</router-link>
      <router-link id="link2" to="/CreateYourOwn">Create Your Own</router-link>
      <router-link id="link3" to="/MyOrder">My order</router-link>
      <router-link id="link4" to="/login">Restricted</router-link>
      <router-link id="link4" to="/proba">proba</router-link>
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
 
#link1, #link2, #link3, #link4{
  color: rgb(61, 95, 93);
  margin-left:50px;
  font-size: 17px;
  font-family:fantasy;
}


</style>