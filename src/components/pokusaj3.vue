<template>
    <div class="card">
<div class="card-header text-left">
{{info.description }}
</div>
<div class="card-body p-0">
<img id="blogg" class="card-img-top" :src="info.url"/>
</div>
<div class="card-footer text-muted text-left">
{{ info.time }}
</div>
</div>
</template>

<script>
import { firebase } from '@/firebase';
import store from '@/store.js';
import { db, storage } from '@/firebase.js';

export default{
name: pokusaj3,
props: ["info"]
};
</script>

<style lang="scss">
#blogg{
    height:300px;
    width: 350px;
}
#nazivk{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>