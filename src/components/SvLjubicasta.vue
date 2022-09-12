
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_sv"><b>Purple berry</b></p>
</div>
<div class="card-body p-0">
<img id="roza_slika" class="card-img-top" src="@/assets/SvLjubicasta.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_sv">Blueberry, hemp oil</p>

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
}

</style>

