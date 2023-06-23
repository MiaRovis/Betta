<template>
 <div class="row">

  <div class="col-8">
    <blog-post v-for="card in filteredCards" :key="card.id" :info="card"/>
    </div>
    <div class="col-3">
      <form @submit.prevent="postNewImage" class="form-inline mb-5">
      <div id="forma" class="form-group">   
        <form @submit.prevent="postNewImage" class="form-inline mb-5"></form>
        <p id="objava"><b>To publish, pleaste upload a <u>picture</u> and add a short <u>description</u></b></p>
        <label for="imageUrl"><b>Image URL</b></label>
        <croppa :width="350" :height="250" placeholder="Upload" v-model="imageReference"> </croppa>
<br/>
      
      
    </div>

    <div id="forma" class="form-group">
      <br/>
    <label for="imageDescription"><b>Description</b></label>
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

  <form id="search">
    <div id="pretraga">
  <b>To filter your search, please enter a <i>keyword</i></b>
    </div>

    <div id="forma">
      <br/>

    <input 
    v-model="store.searchTerm" 
    class="form-control mr-sm-2" 
    type="search" 
    placeholder="Pretraga" 
    aria-label="Search" />

    </div>
  </form>

 </div>
 </div>
 
</template> 

 <script>
 import store from '@/store';
 import { firebase } from '@/firebase';
 import BlogPost from '@/components/BlogPost.vue';
 import {db, storage} from '@/firebase.js';
 
 
// let hello = 'world'; -varijabla home ima vrijednost world

//let cards=[];

//cards = [
 
//{'url':'https://picsum.photos/id/1/400/400',
//"description": "slika",
//'time': 'prije nekoliko minuta'},
//{'url':'https://picsum.photos/id/2/400/400',
//"description": "slika2",
//'time': 'sada'},
//{'url':'https://picsum.photos/id/3/400/400',
//"description": "slika3",
//'time': 'prije nekoliko sati'},

//]


 export default {
  name: 'Blog',
  data: function(){
    return {
      cards: [],
      store,
      newImageDescription:"",
      newImageUrl:"",
      imageReference: null,
      
    }
  },

  computed:{

  	filteredCards(){
      let termin = this.store.searchTerm;
      
      return this.cards.filter((card) => card.description.includes(termin));
    },

  },

  components: {
    BlogPost,
  },

  mounted(){
    this.getPosts();
  },

  methods: {

getPosts(){
console.log("firebase dohvat..")

db.collection('Posts')
.orderBy("posted_at", 'desc')
.limit(15)
.get()
.then((query) => {
  this.cards = [];
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
  
  this.imageReference.generateBlob((blobData) => {
    console.log(blobData);

    let imageName = "posts/" + store.currentUser + "/" + Date.now() + '.png';

    storage
  .ref(imageName)
  .put(blobData)
  .then((result) => { //čuva this
    result.ref.getDownloadURL().then((url) => {
    console.log("Javni link", url);

  const imageDescription = this.newImageDescription;

  db.collection("Posts")
  .add({
    url: url,
    desc: imageDescription,
    email: store.currentUser,
    posted_at: Date.now(),
  })

  .then((doc) => {
    console.log("Spremljeno", doc);
    this.newImageDescription = '';
    this.imageReference.remove();
    this.getPosts();
  })

  .catch((e) => {
    console.error(e);
  });

  }).catch(e => {
    console.error(e);
  });

  })

  .catch(e => {
    console.error(e)
  });

  });
    
  return;

    },
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
#objava{
 text-align:center;
 font-family:Verdana, Geneva, Tahoma, sans-serif;
 font-size:small;
}
#pretraga
{
  margin-top:30px;
  margin-left:50px;
  color:rgb(93, 92, 165);
  text-align:center;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size:small;
}

</style>