<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_nar">Orangie</p>
</div>
<div class="card-body p-0">
<img id="narancasta_slika" class="card-img-top" src="@/assets/narancasta.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_nar">Orange, panthenol</p>
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
}
#naziv_nar{
    margin:5px;
    color:rgb(182, 143, 16);
}

</style>

