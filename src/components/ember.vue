<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivem"><b>Ember</b></p>
</div>
<div class="card-body p-0">
<img id="ember" class="card-img-top" src="@/assets/ember.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/OpisTetra">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'ember',
};
</script>

<style lang="scss">
#ember{
    height:300px;
    width: 350px;
}
#nazivem{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>