<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_tz">Berry</p>
</div>
<div class="card-body p-0">
<img id="tirkizna_slika" class="card-img-top" src="@/assets/tirkizna.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_tz">Blue rasberry, panthenol</p>
<i>Most popular shumpoo</i>
</div>
</div>
</template>

<script>
export default{
 name: 'Trikizna',
};
</script>

<style lang="scss">
#tirkizna_slika{
    height:300px;
    width: 140px;
}
#opis_tz{
    margin:5px;
}
#naziv_tz{
    margin:5px;
    color:rgb(42, 146, 150);
}

</style>

