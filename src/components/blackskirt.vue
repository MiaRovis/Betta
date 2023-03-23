<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivbl"><b>Blackskirt</b></p>
</div>
<div class="card-body p-0">
<img id="blackskirt" class="card-img-top" src="@/assets/blackskirt.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/OpisTetra">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'blackskirt',
};
</script>

<style lang="scss">
#blackskirt{
    height:300px;
    width: 400px;
}
#nazivbl{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>