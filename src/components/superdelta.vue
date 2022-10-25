<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivd"><b>Super Delta</b></p>
</div>
<div class="card-body p-0">
<img id="superdelta" class="card-img-top" src="@/assets/superdelta.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>View more</p>
</div>
</div>
</template>

<script>
export default{
 name: 'superdelta',
};
</script>

<style lang="scss">
#superdelta{
    height:300px;
    width: 350px;
}
#opis_ro{
    margin:5px;
    color:rgb(93, 92, 165);
}
#nazivd{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>