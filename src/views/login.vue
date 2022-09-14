<template>
    <div class="about">
    <div class="container">
    <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
        <br/>
    <form>
    <div class="form-group">
    <p id="admin"><u>Admin-only access</u></p>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>

    <div id="loz" class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <br/>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <br/>
    <button type="button" @click="login" class="btn btn-primary">Submit</button>
    <br/>
    
    </form>
    </div>
    <div class="col-sm"></div>
    </div>
    </div>
    </div>
   </template>

   <script>
    import {firebase} from "@firebase";
    export default {
        name: "login",
        data() {
            return {
                username:"",
                password:"",
            };
        },
        methods: {
            login(){
// primjer - pristup varijabli  alert(this.username);


            },
        },
    };


   </script>


   <style lang="scss">
    #admin{
        font-size:20px;
        color:rgb(168, 46, 16);
    }
    #loz{
        margin-top:10px;
    }
    #log{
        font-size:18px;
        color:rgb(66, 64, 64);
        margin-left:40%;
    }
   </style>