<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivcar"><b>Cardinal</b></p>
</div>
<div class="card-body p-0">
<img id="cardinal" class="card-img-top" src="@/assets/cardinal.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/opiscar">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'cardinal',
};
</script>

<style lang="scss">
#cardinal{
    height:300px;
    width: 350px;
}
#nazivcar{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>