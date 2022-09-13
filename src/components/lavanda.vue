
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_la"><b>Lavender</b></p>
</div>
<div class="card-body p-0">
<img id="lavanda_slika" class="card-img-top" src="@/assets/lavanda.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_la">Scent: Lavender, mint</p>
<p id="opis_la">Contains: panthenol, allantoin, jojoba oil, argan oil, lavender oil, peppermint oil, water</p>
<p id="opis_la"><b>Best for:</b> all hair types, sensitive scalp</p>
<p id="cijena">Price: 25€ / 500mL</p>

</div>
</div>
</template>

<script>
export default{
 name: 'Lavanda',
};
</script>

<style lang="scss">
#lavanda_slika{
    height:300px;
    width: 140px;
   
}
#opis_la{
    margin:5px;
    color:rgb(56, 87, 85);
}
#naziv_la{
    margin:5px;
    color:rgb(56, 87, 85);
    font-size:20px;
}
#cijena{
    margin-top:15px;
    color:black;
}
</style>

