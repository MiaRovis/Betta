<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivser"><b>Serpae</b></p>
</div>
<div class="card-body p-0">
<img id="serpae" class="card-img-top" src="@/assets/serpae.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>View more</p>
</div>
</div>
</template>

<script>
export default{
 name: 'serpae',
};
</script>

<style lang="scss">
#serpae{
    height:300px;
    width: 350px;
}
#nazivser{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>