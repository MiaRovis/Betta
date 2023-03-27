<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivbl"><b>Bloodfin</b></p>
</div>
<div class="card-body p-0">
<img id="bloodfin" class="card-img-top" src="@/assets/bloodfin.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/opisblood">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'bloodfin',
};
</script>

<style lang="scss">
#bloodfin{
    height:300px;
    width: 350px;
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