<template>
<div style=background:#d6bedd;>
  <div id="app">
    <nav id="nav1">
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid" id="nav2">
      <p id="naziv"><i><b>Shumpoo</b></i></p>
  <div class="collapse navbar-collapse" id="navbarToggledDemo02">
    <ul class="navbar-nav1 me-auto mb-2 mb-lg-0">
      
      <router-link id="link1" to="/MostPopular">Most popular</router-link>
      <router-link id="link2" to="/CreateYourOwn">Create Your Own</router-link>
      
    </ul> 
  </div>
  </div>
    </nav>
    </nav>
  <router-view/>
  </div>
</div>
</template>


<style lang="scss">
  
#app{

font-family:'Times New Roman', Times, serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #6e1562;

}

#nav1{

padding: 30px;
background-color: #d6bedd;

}

#nav2{
  padding:1px;
  background-color:rgb(231, 217, 240);
  border-radius:15px;
  
}

#naziv{
  text-align: center;
  font-size: 30px;
}
 
#link1, #link2{

  margin-left:50px;
  font-size: 20px;
    
}







</style>