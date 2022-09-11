<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_tr">Cherry</p>
</div>
<div class="card-body p-0">
<img id="tresnja_slika" class="card-img-top" src="@/assets/tresnja.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_tr">Cherry, alantoin, panthenol</p>
</div>
</div>
</template>

<script>
export default{
 name: 'Tresnja',
};
</script>

<style lang="scss">
#tresnja_slika{
    height:300px;
    width: 140px;
}
#opis_tr{
    margin:5px;
}
#naziv_tr{
    margin:5px;
    color:rgb(172, 51, 92);
}

</style>

