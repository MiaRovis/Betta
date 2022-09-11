
<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziv_ro">Rosie</p>
</div>
<div class="card-body p-0">
<img id="roza_slika" class="card-img-top" src="@/assets/roza.png"/>
</div>
<div class="card-footer text-muted text-left">
<p id="opis_ro">Rose oil, macadamia</p>

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
}
#naziv_ro{
    margin:5px;
    color:rgb(222, 157, 228);
}

</style>

