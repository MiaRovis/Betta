
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_zu"><b>Lemon</b></p>
</div>
<div class="card-body p-0">
<img id="zuta_slika" class="card-img-top" src="@/assets/zuta.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_zu">Scent: Lemon, green apple</p>
<p id="opis_zu">Contains: panthenol, allantoin, jojoba oil, argan oil, glycerin, coco betaine, lauryl and cetyl alcohol, water</p>
<p id="opis_zu"><b>Best for:</b> curly / wavy hair</p>

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
    font-size:20px;
}

</style>

