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
    <Kartica v-for="card in filteredCards" :key="card" :info="card"/>
    
 </div>
 </div>

 
</template> 

 <script>
import store from '@/store';
import { firebase } from '@/firebase';
import { db } from '@/firebase';

import BlogPost from '@/components/BlogPost.vue';

 let cards=[];

 export default{
  name:"Blog",
  data: function() {
    return{
      cards: [],
      store,
      newImageDescription:"",
      newImageUrl:"",
      
    };
  },
  computed:{
    filteredCards(){
      return cards;

    },
  },

    mounted(){
      this.getPosts();
    },

 methods: {

  getPosts(){
  console.log("firebase dohvat..")

  db.collection('Posts')
  .get()
  .then((query) => {
    query.forEach((doc)=> {
      
    const data=doc.data();

    this.cards.push({
      id: doc.id,
      time: data.posted_at,
      description: data.desc,
      url: data.url,

    })
  });
});

},

  postNewImage(){
    const imageUrl = this.newImageUrl;
    const imageDescription = this.newImageDescription;

    db.collection("Posts")
    .add({
      url: imageUrl,
      desc: imageDescription,
      email: store.currentUser,
      posted_at: Date.now(),
    })
    .then((doc) => {
      console.log("Spremljeno", doc);
      this.newImageDescription = '';
      this.newImageUrl = '';
    })
    .catch((e) => {
      console.error(e);
    });

  },

 },
 components: {
    BlogPost,
  },
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