<template>
<div class="container">
    
 <div class="row">
    <div class="col-1"></div>
    <div class="col-5">
        <zuta />
    </div>
    <div class="col-5">
        <roza />
    </div>
 </div>
 
 
</div>
</template>

<script>
import zuta from '@/components/zuta.vue';
import bez from '@/components/bez.vue';
import lavanda from '@/components/lavanda.vue';
import roza from '@/components/roza.vue';
import tresnja from '@/components/tresnja.vue';
import tirkizna from '@/components/tirkizna.vue';
import narancasta from '@/components/narancasta.vue';

export default{
    name: 'Most popular',
    components: {
        zuta,
        bez,
        lavanda,
        roza,
        tresnja,
        tirkizna,
        narancasta


    },
};

</script>

<style lang="scss">
.card{
margin-bottom: 20px;
margin-left: 20;

}






</style>