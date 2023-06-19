<template>
<div class="card text-center">
<div id=nazivk class="card-header text-left">
    {{ info.description }}
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
import store from '@/store';

export default {
    props: ['info'],
    name: 'BlogPost',
};


</script>

<style lang="scss">
.card{
    margin-bottom: 20px;
    width:375px;
    height:400px;
    margin-left:45%;
}

#blogg{
    height:300px;
    width: 350px;
}
#nazivk{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:15px;
}

</style>
