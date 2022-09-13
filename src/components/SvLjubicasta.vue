
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_sv"><b>Purple berrie</b></p>
</div>
<div class="card-body p-0">
<img id="roza_slika" class="card-img-top" src="@/assets/SvLjubicasta.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_sv">Scent: Blueberry</p>
<p id="opis_sv">Contains: panthenol, allantoin, jojoba oil, argan oil, glycerin, hemp seed oil, honey, coco betaine, lauryl and cetyl alcohol, water</p>
<p id="opis_sv"><b>Best for:</b> all hair types</p>
<p id="cijena">Price: 25€ / 500mL</p>
</div>
</div>
</template>

<script>
export default{
 name: 'SvLjubicasta',
};
</script>

<style lang="scss">
#SvLjubicasta_slika{
    height:300px;
    width: 140px;
}
#opis_sv{
    margin:5px;
    color:rgb(56, 87, 85);
}
#naziv_sv{
    margin:5px;
    color:rgb(56, 87, 85);
    font-size:20px;
}
#cijena{
    margin-top:15px;
    color:black;
}

</style>

