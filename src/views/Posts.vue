<template>
    <div v-if="authenticated">
    <button @click="newImage()" type="Novi post" class="btn btn-primary
   ml-2">
    Post new image
    </button>
    <div @click="gotoDetails(card)" :key="card.id" v-for="card in
   filteredCards">
    <BlogPost :info="card"/>
    </div>
    </div>
   </template>

<script>

import store from '@/store';
import { firebase } from '@/firebase';
import {db, storage} from '@/firebase.js';
import BlogPost from '@/components/BlogPost.vue';

export default {
    data() {
    return store;
    },

    computed: {
    filteredCards() {
    return this.cards.filter(card =>
   card.title.includes(this.searchTerm));
    }
    },
    name: "posts",
    methods: {
    gotoDetails(card) {
    this.$router.push({path: `post/${card.id}`})
},

 newImage() {
 this.$router.push({name: 'newpost'}).catch(err => console.log(err))
 }
 },

 components: {
 BlogPost,

 },
}

</script>