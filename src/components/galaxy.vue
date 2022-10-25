<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivg"><b>Galaxy</b></p>
</div>
<div class="card-body p-0">
<img id="galaxy" class="card-img-top" src="@/assets/galaxy.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>View more</p>
</div>
</div>
</template>

<script>
export default{
 name: 'galaxy',
};
</script>

<style lang="scss">
#galaxy{
    height:300px;
    width: 350px;
}
#nazivg{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>