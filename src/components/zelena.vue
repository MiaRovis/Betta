
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_ze">Greens</p>
</div>
<div class="card-body p-0">
<img id="zelena_slika" class="card-img-top" src="@/assets/zelena.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_ze">Lime, cedar, panthenol</p>

</div>
</div>
</template>

<script>
export default{
 name: 'Zelena',
};
</script>

<style lang="scss">
#zelena_slika{
    height:300px;
    width: 140px;
}
#opis_ze{
    margin:5px;
}
#naziv_ze{
    margin:5px;
    color:rgb(43, 161, 89);
}

</style>

