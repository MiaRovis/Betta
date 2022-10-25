<template>
 <div class="container text-center">
  
      <div class="row">
        <div class="col">
         <superdelta/> 
        </div>
        <div class="col order-5">
        <veiltail />
        </div>
        <div class="col order-1">
        <plakat />
        </div>
      </div>
      
      <div class="row">
        <div class="col">
         <feathertail /> 
        </div>
        <div class="col order-5">
         <fantail />
        </div>
        <div class="col order-1">
          <doubletail />
        </div>
      </div>
      
      <div class="row">
        <div class="col">
          <halfmoon />
        </div>
        <div class="col order-5">
         <crowntail />
        </div>
        <div class="col order-1">
          <combtail />
        </div>
      </div>

</div>   
</template>

<script>
import superdelta from '@/components/superdelta.vue';
import veiltail from '@/components/veiltail.vue';
import halfmoon from '@/components/halfmoon.vue';
import combtail from '@/components/combtail.vue';
import crowntail from '@/components/crowntail.vue';
import doubletail from '@/components/doubletail.vue';
import fantail from '@/components/fantail.vue';
import feathertail from '@/components/feathertail.vue';
import plakat from '@/components/plakat.vue';

export default{
  name: 'Betta Offer',
  components: {
    superdelta,
    veiltail,
    plakat,
    halfmoon,
    combtail,
    crowntail,
    doubletail,
    fantail,
    feathertail
  },
};


</script>

<style lang="scss">
.card{
margin: 10px;
background-color:rgb(216, 209, 231);
}
#sl{
color:rgb(216, 209, 231);
font-size:15px;

}

</style>