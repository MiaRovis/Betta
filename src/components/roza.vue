
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_ro"><b>Rosie</b></p>
</div>
<div class="card-body p-0">
<img id="roza_slika" class="card-img-top" src="@/assets/roza.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_ro">Scent: Rose</p>
<p id="opis_ro">Contains: panthenol, allantoin, jojoba oil, argan oil, tea tree oil, aloe vera, macadamia oil, water </p>
<p id="opis_ro"><b>Best for:</b> combination hair</p>

</div>
</div>
</template>

<script>
export default{
 name: 'Roza',
};
</script>

<style lang="scss">
#roza_slika{
    height:300px;
    width: 140px;
}
#opis_ro{
    margin:5px;
    color:rgb(56, 87, 85);

}
#naziv_ro{
    margin:5px;
    color:rgb(56, 87, 85);
    font-size:20px;
}

</style>

