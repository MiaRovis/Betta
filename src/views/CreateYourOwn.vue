<template>
    <div class="container text-center">
   
         <div class="row">
           <div class="col">
             <prazna/>
           </div>
         </div>
   
   
   </div>   
   </template>
   
   <script>
   import prazna from '@/components/prazna.vue';
   
   
   export default{
       name: 'CreateYourOwn',
       components: {
       prazna
   },
   };
   
   </script>
   
   <style lang="scss">
   .card{
   margin: 20px;
   }
   </style>