<template>
    <div id="ord">
    <h1>Thank you for you order!</h1>
    <h3>We will make sure it gets to you safely and in the shortest amount of time!</h3>
    <p id="ar">Estimated arrival: 3-5 business days.</p><br/>
    <p id="zhv">Thank you for choosing <i><b>shumpoo!</b></i></p><br/>
    <router-link id="nazad" to="/ShampooOffer" tag="button">Continue shopping</router-link>
    </div>
</template>



<style lang="scss">
#ord{
    margin-top:2%;
    margin-left:5%;
    font-size:20px;
    color:rgb(96, 99, 98);
}
#zhv{
    font-size:30px;
    color:rgb(27, 131, 122);
}
#nazad{
    color:rgb(96, 99, 98);  
}

</style>