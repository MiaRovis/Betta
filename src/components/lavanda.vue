
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_la">Lavender dream</p>
</div>
<div class="card-body p-0">
<img id="lavanda_slika" class="card-img-top" src="@/assets/lavanda.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_la">Lavander oil, mint</p>

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
}
#naziv_la{
    margin:5px;
    color:rgb(160, 130, 194);
}

</style>

