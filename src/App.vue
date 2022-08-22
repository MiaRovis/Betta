<template>
<div style=background:#CAA8D8;>
  <div id="app">
<nav id = "nav">
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container-fluid" id="nav2">
  <a class="navbar-brand" href="#">Shumpoo</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item">
<router-link to="/MyProfile">My Page</router-link> |
</li>
<li class="nav-item">
  <router-link to="/Home">Home</router-link> |
</li>


</ul>


</div>
</div>
</nav>

</nav>
</div>
</div>
</template>

<style lang="scss">
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smotthing: grayscale;
text-align: center;
color: #f8c3f1;

}

#nav2{
  padding: 30px;
  background-color: #fff3da;
}


</style>
