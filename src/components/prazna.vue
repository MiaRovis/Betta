<template>
    <div id="prazna" class="card">
<div class="card-header text-left">
<p id="naziv_prazna"><b>Create your own!</b></p>
</div>
<div class="card-body p-0">
<img id="prazna_slika" class="card-img-top" src="@/assets/prazna.png"/>
</div>

</div>
</template>

<script>
export default{
 name: 'Narancasta',
};
</script>

<style lang="scss">
#prazna_slika{
    height:400px;
    width: 200px;
}
#opis_prazna{
    margin:5px;
    color:rgb(56, 87, 85);
}
#naziv_prazna{
    margin:5px;
    color:rgb(56, 87, 85);
}


</style>

