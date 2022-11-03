<template>
    <div class="row">
    <div class="col-8">
    <!-- nova forma za post -->
    <form @submit.prevent="postNewImage" class="form-inline mb-5">
    <div id="forma" class="form-group">
    <label for="imageUrl">Image URL</label>
    <input
    v-model="newImageUrl"
   type="text"
   class="form-control ml-2"
   placeholder="Enter the image URL"
   id="imageUrl"
    />
    </div>
    <div id="forma" class="form-group">
    <label for="imageDescription">Description</label>
    <input 
    v-model="newImageDescription"
   type="text"
   class="form-control ml-2"
   placeholder="Enter the image description"
   id="imageDescription"
    />
    </div>
    <button id="forma2" type="submit" class="btn btn-secondary ml-2">Post
   image</button>
    </form>
 </div>
 </div>
 <div class="container text-center">
   
   <div class="row">
     <div class="col">
      <ribice1/> 
     </div>
     <div class="col order-5">
     <akvarij1 />
     </div>
     <div class="col order-1">
     <zlatne1 />
     </div>
   </div>



</div>
</template> 

 <script>
import ribice1 from '@/components/ribice1.vue';
import akvarij1 from '@/components/akvarij1.vue';
import zlatne1 from '@/components/zlatne1.vue';
 
 export default{
   name: 'Blog',
   components: {
    ribice1,
    akvarij1,
    zlatne1
   
   },
   data: function() {
    return{
        
    }

   }
 };
</script>

<style lang="scss">
#forma{
    margin-left:50px;
    color:rgb(93, 92, 165);

}
#forma2{
    margin-left:50px;
    margin-top: 15px;
}



</style>