<template>
<div id="order">

    <div class="wraper">
        <p id="sm">Shumpoo type: Original formula<br/>Price: 25€ per shumpoo (500mL)</p>
        <input v-model="NewShumpooName" type="text"  placeholder="Shumpoo name">
        <input v-model="NewShumpooQuantity" type="text"  placeholder="Shumpoo quantity (num)">
        <p id="upozorenje">We will never share your information with anyone else!</p>
        <button id="ord" type="button" @click="SaveOrder()" class="btn btn-secondary">Order!</button>
    </div>

</div>
</template>

<script>
import { firebase } from '@/firebase';
import store from '@/store';
import { db } from '@/firebase';
import { collection, doc, getFirestore, setDoc } from "firebase/firestore"; 

export default{
    name: 'MyOrder',
    data: function() {
        return {
            store,
            NewShumpooName: "",
            NewShumpooQuantity: "",
        };
    },
    methods: {
        SaveOrder() {
        
        
        },
    },
};
</script>



<style lang="scss">
#sm{
    font-size:20px;
    color:rgb(27, 131, 122);
    text-align:center;
    margin-top:10px;
    margin-bottom:20px;
}
#upozorenje{
        color:rgb(184, 33, 33);
        margin-left:20px;
        margin-top:20px;
    }

.body{
    background-color:beige;
    color:black;
}
 
.wraper{
    width:400px;
    margin:40px auto;
    padding:10px;
    border:0;
    border-radius:10px;
    background-color:white;
    box-shadow: 0px 10px 40px 0px rgba(47,47,47,.1);
}

input[type="text"]{
    padding: 10px;
    margin: 10px auto;
    display: block;
    border-radius: 5px;
    border: 1px solid lightgrey;
    background:none;
}

input[type="text"]:focus{
    outline:none;
}

.h1{
    text-align:center;
    font-size:40px;
    color: black;
}
#ord{
    margin-left:38%;
}


</style>

