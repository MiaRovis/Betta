<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivpo"><b>Porthole</b></p>
</div>
<div class="card-body p-0">
<img id="porthole" class="card-img-top" src="@/assets/porthole.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/OpisRas">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'porthole',
};
</script>

<style lang="scss">
#porthole{
    height:300px;
    width: 350px;
}
#nazivpo{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}


</style>