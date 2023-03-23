<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivst"><b>Strawberry</b></p>
</div>
<div class="card-body p-0">
<img id="strawberry" class="card-img-top" src="@/assets/strawberry.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/OpisRas">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'strawberry',
};
</script>

<style lang="scss">
#strawberry{
    height:300px;
    width: 350px;
}
#nazivst{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}

</style>