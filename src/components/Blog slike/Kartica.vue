<template>
    <div class="card">
<div class="card-header text-left">
{{info.description }}
</div>
<div class="card-body p-0">
<img id="kartica" class="card-img-top" :src="info.url"/>
</div>
<div class="card-footer text-muted text-left">
    {{ info.time | moment }}
</div>
</div>
</template>

<script>
import { firebase } from '@/firebase';
import store from '@/store.js';
import { db, storage } from '@/firebase.js';

export default{
props: ["info"]
};
</script>

<style lang="scss">
#kartica{
    height:300px;
    width: 350px;
}
#nazivk{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:20px;
}

</style>