import {menuArray} from '/data.js'

const container = document.getElementById("container")
let order = document.getElementById("order")
let newMenuArray = []
let orderSummary = ""
let test = document.getElementById("test")

document.addEventListener('click',function(e){

   if(e.target.dataset.btn){
      selectItem(e.target.dataset.btn)
   }
     addBotton()
})



//**Add the botton of the order */
// function addBotton(){

//    order.innerHTML = 
//    `<h1 class="order-title">Your order</h1> 
//    <div class="order-top">
//     <div class="mainContentOrder" id="mainContentOrder">
//     </div>
//   </div> 
//    <button class="order-btn" id="order">Complete Order</button>
// `
// }


//**This function will select the whole object that matched the id clicked and store it inside the variable targetItem. Originally we are storaging an array but to make it into an object we will include the [0] at the end, since this array will Always hold only 1 item.
function selectItem(dishId){
   const targetItem = menuArray.filter(function(dish){
      return dish.id == dishId 
   })[0]
    
   
   addItem(targetItem)  
}


// **This function pushes the objects clicked into a new array called newMenuArray */
function addItem(item){

   newMenuArray.push(item)
   console.log({newMenuArray});
   renderFinalOrder(newMenuArray)
}


function renderFinalOrder(targetItem){

   
    let a = ""

    newMenuArray.forEach(function(item){

      
     a= 
     `   <div class"order-top order">
     <div>
     ${item.name} 
     <button class="remove-btn" id="remove-btn">remove</button>
   </div>
     ${item.price}
 </div>

 <hr>

 <div class="order-botton">
   <h1>Total Price</h1>
   $
 </div>
 </div>
  `
      
      
   })

   test.innerHTML+= a

}


renderFinalOrder()
   

//***The function renderData uses an array to access the data and concatenate it on a variable using a html boiling plate. The boilerplate uses variables that access the data.js file.  
function getDataHtml(){
   let renderData=""

   menuArray.forEach(function(dish){
      renderData +=`
      <div class="item">
         <div class="image">
          ${dish.emoji}
         </div>

         <div class="description">
            <h2>Food</h2>
            <div class="ingredients">${dish.ingredients}</div>
            <div class="price">$ ${dish.price}</div>
         </div>
         <i class="add-btn fa-solid fa-circle-plus" data-btn ="${dish.id}"></i>
         
      
    </div>
    `

   })
   return renderData
}


//***By using innerHtml the function render() gets the returned data from the function getDataHtml()
function render(){
   container.innerHTML = getDataHtml()
}


//***Call function render
render()




