<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivfe"><b>Feather Tail</b></p>
</div>
<div class="card-body p-0">
<img id="feathertail" class="card-img-top" src="@/assets/feathertail.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/opisfeather">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'feathertail',
};
</script>

<style lang="scss">
#feathertail{
    height:300px;
    width: 350px;
}
#nazivfe{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>