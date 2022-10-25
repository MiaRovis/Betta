<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivku"><b>Kubotai</b></p>
</div>
<div class="card-body p-0">
<img id="kubotai" class="card-img-top" src="@/assets/kubotai.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>View more</p>
</div>
</div>

</template>

<script>
export default{
 name: 'kubotai',
};
</script>

<style lang="scss">
#kubotai{
    height:300px;
    width: 350px;
}
#nazivku{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>