<template>
    <div class="card">
<div class="card-header text-left">
<p id="nazivv"><b>Veil Tail</b></p>
</div>
<div class="card-body p-0">
<img id="veiltail" class="card-img-top" src="@/assets/veiltail.jpg"/>
</div>
<div class="card-footer text-muted text-left">
    <p>View more</p>
</div>
</div>
</template>

<script>
export default{
 name: 'veiltail',
};
</script>

<style lang="scss">
#veiltail{
    height:300px;
    width: 350px;
}
#nazivv{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>