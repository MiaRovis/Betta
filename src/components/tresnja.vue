<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_tr"><b>Cherry</b></p>
</div>
<div class="card-body p-0">
<img id="tresnja_slika" class="card-img-top" src="@/assets/tresnja.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_tr">Cherry</p>
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
    color:rgb(56, 87, 85);
}
#naziv_tr{
    margin:5px;
    color:rgb(56, 87, 85);
}

</style>

