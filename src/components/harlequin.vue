<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivha"><b>Harlequin</b></p>
</div>
<div class="card-body p-0">
<img id="harlequin" class="card-img-top" src="@/assets/harlequin.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>View more</p>
</div>
</div>
</template>

<script>
export default{
 name: 'harlequin',
};
</script>

<style lang="scss">
#harlequin{
    height:300px;
    width: 280px;
}
#nazivha{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>