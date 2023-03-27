<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivru"><b>Rummy</b></p>
</div>
<div class="card-body p-0">
<img id="rummy" class="card-img-top" src="@/assets/rummy.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/opisrummy">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'rummy',
};
</script>

<style lang="scss">
#rummy{
    height:300px;
    width: 350px;
}
#nazivru{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>