<template>
 <div class="container text-center">
  
      <div class="row">
        <div class="col">
          <zuta/>
        </div>
        <div class="col order-5">
         <tresnja/>
        </div>
        <div class="col order-1">
          <narancasta/>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <roza/>
        </div>
        <div class="col order-5">
         <lavanda/>
        </div>
        <div class="col order-1">
          <SvLjubicasta/>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <tirkizna/>
        </div>
        <div class="col order-5">
         <bez/>
        </div>
        <div class="col order-1">
          <zelena/>
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
import zelena from '@/components/zelena.vue';
import SvLjubicasta from '../components/SvLjubicasta.vue';

export default{
    name: 'Most popular',
    components: {
    zuta,
    bez,
    lavanda,
    roza,
    tresnja,
    tirkizna,
    narancasta,
    zelena,
    SvLjubicasta
},
};

</script>

<style lang="scss">
.card{
margin: 10px;
background-color:#c1c0c4fb;
}
#sl{
color:rgb(12, 97, 86);
font-size:15px;

}

</style>