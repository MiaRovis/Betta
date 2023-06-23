<template>
<div class="card text-center">
<div id=nazivk class="card-header text-left">
{{ info.description }}
</div>
<div class="card-body p-0">
    <img id="blogg" class="card-img-top" :src="info.url"/>
</div>
<div class="card-footer text-muted text-left">
{{ info.time | moment}}

</div>

<div id="komentari" class="comments list-group" v-if="showcomments">
   <a :key="c.posted_at" v-for="c in comments" href="#"
  class="animate list-group-item list-group-item-action flex-column alignitems-start">
   <div class="d-flex w-100 justify-content-between">
   <small style="font-style: italic;font-size:5px">{{ c.posted_at | moment }} by {{ c.email }}
  </small>
   </div>
   <small>{{ c.comment }}</small>
   </a>
   </div>
   <form id="komentari" @submit.prevent="postComment()" class="form-inline mb-5">
   <div class="form-group">
   <textarea v-model="newComment"  class="form-control" id="textAreaExample" rows="4" style="background: #fff;" placeholder="Enter your comment"></textarea>
   </div>
   <button id="btnzakom" type="submit" class="btn btn-secondary ml2">Post my comment</button>
   </form>
   </div> 

 
</template>

<script>
import { firebase } from '@/firebase';
import store from '@/store';
import moment from "moment";
import {db, storage} from '@/firebase.js';

export default {
    props: ['info', 'showcomments'],
    data () {
    return {
        global: store,
        newComment: "",
        comments: []
    }
   },
   mounted() {
   if (this.showcomments) {
    db.collection("posts").doc(this.info.id).collection("comments").onSnapshot
  (snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                    let comment = change.doc.data();
                    comment.isNew = true;
                    console.log(comment);
                    this.comments.unshift(comment)
                }
            })
        })
    }
   },
   methods: {
   postComment() {
   if (this.newComment) {
    console.log("id postova: ",this.info.id)
    db.collection("posts") // kolekcija roditelj
        .doc(this.info.id) // konkretni post
            .collection("comments") // podkolekcija
            .add({ email: this.global.currentUser, comment:
  this.newComment, posted_at: Date.now() })
                    .then(result => {
                     console.log(result)
                    this.newComment = "";
   
                    })
                    .catch(e => {
                        console.error(e)
                    })
            }
        }
   },
   filters: {
          moment: function(time) {
              return moment(time).fromNow();
          
        }
  }
}


</script>

<style lang="scss">
.card{
    
    width:375px;
    height:400px;
    margin-left:45%;
    margin-bottom: 25%;
}

#blogg{
    height:300px;
    width: 350px;
}
#nazivk{
    margin:5px;
    color:rgb(93, 92, 165);
    font-size:15px;
}
#komentari{
    margin-top:10px;
}
#btnzakom{
    margin-top:2px;
}

</style>
