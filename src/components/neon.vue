<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivneo"><b>Neon</b></p>
</div>
<div class="card-body p-0">
<img id="neon" class="card-img-top" src="@/assets/neon.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/OpisTetra">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'rummy',
};
</script>

<style lang="scss">
#neon{
    height:300px;
    width: 350px;
}
#nazivneo{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>