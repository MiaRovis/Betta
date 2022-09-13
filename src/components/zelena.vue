
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_ze"><b>Greenie</b></p>
</div>
<div class="card-body p-0">
<img id="zelena_slika" class="card-img-top" src="@/assets/zelena.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_ze">Scent: Lime, cedar</p>
<p id="opis_ze">Contains: panthenol, allantoin, jojoba oil, argan oil, glycerin, avocado oil, clay, water</p>
<p id="opis_ze"><b>Best for:</b> Split ends </p>
<p id="cijena">Price: 25€ / 500mL</p>

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
    color:rgb(56, 87, 85);
}
#naziv_ze{
    margin:5px;
    color:rgb(56, 87, 85);
    font-size:20px;
}
#cijena{
    margin-top:15px;
    color:black;
}

</style>

