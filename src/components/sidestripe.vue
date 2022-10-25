<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivss"><b>Sidestripe</b></p>
</div>
<div class="card-body p-0">
<img id="sidestripe" class="card-img-top" src="@/assets/sidestripe.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>View more</p>
</div>
</div>
</template>

<script>
export default{
 name: 'sidestripe',
};
</script>

<style lang="scss">
#sidestripe{
    height:300px;
    width: 350px;
}
#nazivss{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>