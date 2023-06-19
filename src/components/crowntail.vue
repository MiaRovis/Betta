<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivcr"><b>Crowntail</b></p>
</div>
<div class="card-body p-0">
<img id="crowntail" class="card-img-top" src="@/assets/crowntail.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/opiscrown">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'crowntail',
};
</script>

<style lang="scss">
#crowntail{
    height:300px;
    width: 350px;
}
#nazivcr{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>