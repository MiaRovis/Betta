<template>
    <div class="container text-center">
     
         <div class="row">
           <div class="col">
             <congo />
           </div>
           <div class="col order-5">
            <neon />
           </div>
           <div class="col order-1">
             <blackskirt />
           </div>
         </div>
   
         <div class="row">
           <div class="col">
             <ember />
           </div>
           <div class="col order-5">
            <serpae />
           </div>
           <div class="col order-1">
             <diamond />
           </div>
         </div>
   
         <div class="row">
           <div class="col">
             <cardinal />
           </div>
           <div class="col order-5">
            <bloodfin />
           </div>
           <div class="col order-1">
             <rummy />
           </div>
         </div>
   
   </div>   
   </template>
   
   <script>
   import cardinal from '@/components/cardinal.vue';
   import diamond from '@/components/diamond.vue';
   import neon from '@/components/neon.vue';
   import congo from '@/components/congo.vue';
   import serpae from '@/components/serpae.vue';
   import blackskirt from '@/components/blackskirt.vue';
   import rummy from '@/components/rummy.vue';
   import bloodfin from '@/components/bloodfin.vue';
   import ember from '@/components/ember.vue';

   export default{
   name: 'Tetra Offer',
   components: {
    cardinal,
    diamond,
    neon,
    congo,
    serpae,
    blackskirt,
    rummy,
    bloodfin,
    ember
    
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