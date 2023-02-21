<template>
  <div class="container text-center">
    
   
       <div class="row">
         <div class="col">
          <galaxy/> 
         </div>
         <div class="col order-5">
         <kubotai />
         </div>
         <div class="col order-1">
         <sidestripe />
         </div>
       </div>
       
       <div class="row">
         <div class="col">
          <porthole /> 
         </div>
         <div class="col order-5">
          <scissortail />
         </div>
         <div class="col order-1">
           <axelrodi />
         </div>
       </div>
       
       <div class="row">
         <div class="col">
           <harlequin />
         </div>
         <div class="col order-5">
          <strawberry />
         </div>
         <div class="col order-1">
           <blackline />
         </div>
       </div>
 
 </div>   
 </template>
 
 <script>
 import axelrodi from '@/components/axelrodi.vue';
 import harlequin from '@/components/harlequin.vue';
 import strawberry from '@/components/strawberry.vue';
 import porthole from '@/components/porthole.vue';
 import scissortail from '@/components/scissortail.vue';
 import sidestripe from '@/components/sidestripe.vue';
 import galaxy from '@/components/galaxy.vue';
 import kubotai from '@/components/kubotai.vue';
 import blackline from '@/components/blackline.vue';
 
 
 export default{
   name: 'Rasbora Offer',
   components: {
    axelrodi,
    harlequin,
    strawberry,
    porthole,
    scissortail,
    sidestripe,
    galaxy,
    kubotai,
    blackline
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