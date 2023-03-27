<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivco"><b>Congo</b></p>
</div>
<div class="card-body p-0">
<img id="congo" class="card-img-top" src="@/assets/congo.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <router-link id="lk" to="/opiscongo">About the species</router-link>
</div>
</div>
</template>

<script>
export default{
 name: 'congo',
};
</script>

<style lang="scss">
#congo{
    height:300px;
    width: 350px;
}
#nazivco{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}
#lk{
    color:rgb(93, 92, 165);
}
</style>