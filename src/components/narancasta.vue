<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_nar"><b>Orangie</b></p>
</div>
<div class="card-body p-0">
<img id="narancasta_slika" class="card-img-top" src="@/assets/narancasta.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_nar">Scent: Orange, mandarine</p>
<p id="opis_nar">Contains: panthenol, allantoin, jojoba oil, argan oil, glycerin, aloe vera, cetyl alcohol, rice amino acids, water</p>
<p id="opis_nar"><b>Best for:</b> curly / wavy hair</p>
</div>
</div>
</template>

<script>
export default{
 name: 'Narancasta',
};
</script>

<style lang="scss">
#narancasta_slika{
    height:300px;
    width: 140px;
}
#opis_nar{
    margin:5px;
    color:rgb(56, 87, 85);
}
#naziv_nar{
    margin:5px;
    color:rgb(56, 87, 85);
    font-size:20px;
}

</style>

