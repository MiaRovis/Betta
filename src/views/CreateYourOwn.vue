<template>
    <div class="container text-center">
   
        <div class="row">
          <div class="col">
             <prazna/>
          <i><b>Disclaimer:</b></i> All of our shampoos are of 99% natural origin and do not contain harsh chemicals like sulfates and parabens.
            Every shampoo contains panthenol, allantoin and plant essential jojoba and argan oils.
          <p></p>
          <h4 id="order">All done? Add your custom shampoo to your order by clicking on the "add to order" below.</h4>
          <p></p>
          <button type="button" class="btn" data-bs-toggle="button"><b>Add to order</b></button>
          </div>

          <div class="col order-5">
          <h2>Hello! Welcome to <i>create your own <b>shumpoo!</b></i></h2>
          <h5>Here, you can add your own ingredients, for a custom made shumpoo!</h5>
          <p id="lista">Please choose your hair type</p>

            <ul class="list-group">

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="prvo">
            <label class="form-check-label" for="prvo">Wavy</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="drugo">
            <label class="form-check-label" for="drugo">Curly</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="trece">
            <label class="form-check-label" for="trece">Combination</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="cetvrto">
            <label class="form-check-label" for="cetvrto">Straight</label>
            </li>

            </ul>

            <p></p>
            <p id="lista">I would like my shampoo scent to be:</p>

            <ul class="list-group">

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="prva">
            <label class="form-check-label" for="prva">Apple</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="druga">
            <label class="form-check-label" for="druga">Mango</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="treca">
            <label class="form-check-label" for="treca">Grapefruit</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="cetvrta">
            <label class="form-check-label" for="cetvrta">Banana</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="peta">
            <label class="form-check-label" for="peta">Scent-free</label>
            </li>

            </ul>

            <p></p>
            <p id="lista">A helpful ingredient I would like to add is:</p>
            <ul id="kutijica" class="list-group">

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="prvi">
            <label class="form-check-label" for="prvi">Biotin - promotes hair growth</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="drugi">
            <label class="form-check-label" for="drugi">Essential oils - nourishment</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="treci">
            <label class="form-check-label" for="treci">Collagen - growth and structure</label>
            </li>

            <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="cetvrti">
            <label class="form-check-label" for="cetvrti">Zinc - regulates hair loss</label>
            </li>

          </ul>
          <p></p>                     
          </div>
         </div>
  
   </div>   
   </template>
   
<script>
import prazna from '@/components/prazna.vue';   
export default{
  name: 'CreateYourOwn',
  components: {
  prazna
},   
};
</script>
   
<style lang="scss">
.card{
margin: 20px;
}
#lista{
font-size: 20px;
}
.btn{
color:rgb(15, 15, 15);
font-size:20px;
font-family:'Times New Roman', Times, serif;
background-color:rgb(105, 173, 170);
margin-right:15px;
}
#order{
color:rgb(39, 63, 61);
}
</style>