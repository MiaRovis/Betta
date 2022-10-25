<template>
    <div class="card">
<div class="card-header text-left">
<p id="naziva"><b>Axelrodi</b></p>
</div>
<div class="card-body p-0">
<img id="axelrodi" class="card-img-top" src="@/assets/axelrodi.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>View more</p>
</div>
</div>
</template>

<script>
export default{
 name: 'axelrodi',
};
</script>

<style lang="scss">
#axelrodi{
    height:300px;
    width: 350px;
}
#naziva{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>