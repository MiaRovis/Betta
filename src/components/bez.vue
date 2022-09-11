
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_be">Special</p>
</div>
<div class="card-body p-0">
<img id="bez_slika" class="card-img-top" src="@/assets/bez.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_be">Coconut, scent free</p>

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
}
#naziv_be{
    margin:5px;
    color:rgb(201, 182, 141);
}

</style>

