<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivf"><b>Fan Tail</b></p>
</div>
<div class="card-body p-0">
<img id="fantail" class="card-img-top" src="@/assets/fantail.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/opisfan">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'fantail',
};
</script>

<style lang="scss">
#fantail{
    height:300px;
    width: 350px;
}
#nazivf{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>