<template>
    <div id="order">
    
        <div class="wraper">
            <p id="cs">Shumpoo type: Custom made<br/>Price: 25€ + 2€ per ingredient</p>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Surname">
            <input type="text" placeholder="E-mail">
            <input type="text" placeholder="Home Adress">
            <input type="text" placeholder="Shampoo quantity (num)">
            <p id="upozorenje">We will never share your information with anyone else!</p>
            <router-link id="nar" to="/CustomOrder" tag="button">Confirm order!</router-link>
        </div>
    
    </div>
    </template>
    
    <style lang="scss">
    #cs{
        font-size:20px;
        color:rgb(27, 131, 122);
        text-align:center;
        margin-top:10px;
        margin-bottom:20px;
    }

    #upozorenje{
            margin-top:20px;
            color:rgb(184, 33, 33);
            margin-left:20px;
        }
    
    body{
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
    #nar{
        margin-left:35%;
        font-size:17px;      
    }
    
    
    </style>
    
    