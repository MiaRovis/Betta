<template>
    <div v-if="card"></div>

</template>

<script>
import store from '@/store';
 import { firebase } from '@/firebase';
 import BlogPost from '@/components/BlogPost.vue';
 import {db, storage} from '@/firebase.js';

    export default {
    props: ['id'],
    data() {
    return {
    card: null
    }
    },

    mounted() {
    console.log(this.id);
    db.collection("Posts")
    .doc(this.id).get().then(doc => {
    this.card = doc.data();
    this.card.id = doc.id;
    })
    },
    name: "post-detail",

    components: {
        BlogPost
    },
}

</script>

<style scoped>
    button {
        margin-bottom: 20px
 }
 </style>