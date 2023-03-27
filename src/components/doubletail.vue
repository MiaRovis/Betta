<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivdb"><b>Double Tail</b></p>
</div>
<div class="card-body p-0">
<img id="doubletail" class="card-img-top" src="@/assets/doubletail.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/opisdouble">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'doubletail',
};
</script>

<style lang="scss">
#doubletail{
    height:300px;
    width: 350px;
}
#nazivdb{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>