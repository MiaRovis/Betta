<template>
 <div class="row">

  <div class="col-8">
      <blog-post v-for="card in cards" :key="card" :info="card"/>
    </div>
    <div class="col-3">
      <form @submit.prevent="postNewImage" class="form-inline mb-5">
      <div id="forma" class="form-group">
        <p id="objava"><b>To publish, pleaste enter a valid <i>url</i> and short <i>description</i></b></p>      
      <form @submit.prevent="postNewImage" class="form-inline mb-5"></form>
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

    <button id="forma2" type="submit" class="btn btn-secondary ml-2">Post image</button>
</form>
 </div>
 </div>
 
</template> 

 <script>
 import store from '@/store';
 import { firebase } from '@/firebase';
 import BlogPost from '@/components/BlogPost.vue';

// let hello = 'world'; -varijabla home ima vrijednost world

let cards=[];

cards = [
 
{'url':'https://picsum.photos/id/1/400/400',
"description": "slika",
'time': 'prije nekoliko minuta'},
{'url':'https://picsum.photos/id/2/400/400',
"description": "slika2",
'time': 'sada'},
{'url':'https://picsum.photos/id/3/400/400',
"description": "slika3",
'time': 'prije nekoliko sati'},

]

 export default {
  name: 'Blog',
  data: function(){
    return {
      cards: cards,
      store,
      newImageDescription:"",
      newImageUrl:"",
    }
  },

  components: {
    BlogPost,
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
#objava{
 text-align:center;
 font-family:Verdana, Geneva, Tahoma, sans-serif;
 font-size:small;
}
</style>