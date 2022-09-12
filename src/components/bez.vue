
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_be"><b>Special</b></p>
</div>
<div class="card-body p-0">
<img id="bez_slika" class="card-img-top" src="@/assets/bez.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_be">Scent: scent free</p>
<p id="opis_zu">Contains: panthenol, allantoin, jojoba oil, argan oil, glycerin, salicylic acid, water</p>
<p id="opis_zu"><b>Best for:</b> itchy scalp, dandruff</p>

</div>
</div>
</template>

<script>
export default{
 name: 'Bez',
};
</script>

<style lang="scss">
#bez_slika{
    height:300px;
    width: 140px;
}
#opis_be{
    margin:5px;
    color:rgb(56, 87, 85);
}
#naziv_be{
    margin:5px;
    color:rgb(56, 87, 85);
    font-size:20px;
}

</style>

