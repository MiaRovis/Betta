<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_tz"><b>Berrie</b></p>
</div>
<div class="card-body p-0">
<img id="tirkizna_slika" class="card-img-top" src="@/assets/tirkizna.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_tz">Scent: Blue rasberry</p>
<p id="opis_tz">Contains: panthenol, allantoin, jojoba oil, argan oil, glycerin, dimethicone, water </p>
<p id="opis_tz"><b>Best for:</b> dull hair with no shine</p>

</div>
</div>
</template>

<script>
export default{
 name: 'Trikizna',
};
</script>

<style lang="scss">
#tirkizna_slika{
    height:300px;
    width: 140px;
}
#opis_tz{
    margin:5px;
    color:rgb(56, 87, 85);
}
#naziv_tz{
    margin:5px;
    color:rgb(56, 87, 85);
    font-size:20px;
}

</style>

