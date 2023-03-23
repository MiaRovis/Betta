<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivc"><b>Comb Tail</b></p>
</div>
<div class="card-body p-0">
<img id="combtail" class="card-img-top" src="@/assets/combtail.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/OpisBetta">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'combtail',
};
</script>

<style lang="scss">
#combtail{
    height:300px;
    width: 350px;
}
#nazivc{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>