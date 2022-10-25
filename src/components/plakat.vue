<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivp"><b>Plakat</b></p>
</div>
<div class="card-body p-0">
<img id="plakat" class="card-img-top" src="@/assets/plakat.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>View more</p>
</div>
</div>
</template>

<script>
export default{
 name: 'feathertail',
};
</script>

<style lang="scss">
#plakat{
    height:300px;
    width: 350px;
}
#nazivp{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>