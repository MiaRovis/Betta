<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivak1"><b>One of my tanks</b></p>
</div>
<div class="card-body p-0">
<img id="akvarij1" class="card-img-top" src="@/assets/akvarij1.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>5min ago</p>
</div>
</div>
</template>

<script>
export default{
 name: 'akvarij1',
};
</script>

<style lang="scss">
#akvarij1{
    height:300px;
    width: 350px;
}
#nazivak1{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>