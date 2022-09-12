
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_zu"><b>Lemon</b></p>
</div>
<div class="card-body p-0">
<img id="zuta_slika" class="card-img-top" src="@/assets/zuta.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_zu">Lemon, green apple</p>

</div>
</div>
</template>

<script>
export default{
 name: 'Zuta',
};
</script>

<style lang="scss">
#zuta_slika{
    height:300px;
    width: 140px;
}
#opis_zu{
    margin:5px;
    color:rgb(56, 87, 85);
}
#naziv_zu{
    margin:5px;
    color:rgb(56, 87, 85);
}

</style>

