import {menuArray} from '/data.js'

let order = document.getElementById("order")
let cart = []


document.addEventListener('click',function(e){

   if(e.target.dataset.btn){

      selectItem(e.target.dataset.btn)

   }if(e.target.dataset.remove){

      identifyRemoveItem(e.target.dataset.remove)   
   }
})


//**This function will select the whole object that matched the id clicked and store it inside the variable targetItem. Originally we are storaging an array but to make it into an object we will include the [0] at the end, since this array will Always hold only 1 item.
function selectItem(dishId){
   // const targetItem = menuArray.filter(function(dish){
   //    return dish.id == dishId 
   // })[0]

   const targetItem = menuArray.find(function(dish){
      return dish.id == dishId 
   })
  
   addItem(targetItem)  
}


// **This function pushes the objects clicked into a new array called cart. It invokes the function calculatePrice and passes the array cart with the new items added */
function addItem(item){

   cart.push(item)
   calculatePrice(cart)
   getHtmlFromCart(cart)
}



//**This function creates a new array by usig the method map. We storage the sum of all the items into the variable sumPrices by using the method reduce. */
function calculatePrice(cart){
   
   let prices = cart.map(function(product){
       return product.price
   })
   
   const sumPrices = prices.reduce(function (accumulator,currentPrice) {
      return accumulator + currentPrice   
   })

   // console.log(sumPrices)
   renderCart(sumPrices)
   
}


function renderCart(sumPrices){
   let htmlItens = getHtmlFromCart(cart)
   
   let html = ""
    html = `
         <h1 class="order-title">Your order</h1> 
          <div class="order-top">
            ${htmlItens} 
          </div>

        <hr>

        <div class="order-botton">
          <h1>Total Price</h1>
          ${sumPrices}
        </div> 

        <div class="btn">
         <button class="order-btn" id="order">Complete Order</button>
        </div>`

        
   renderFinalOrder(html)
}


function getHtmlFromCart(cart){
   
    let html = ""
   
   cart.forEach(function(product){
      html +=`
      <div class="test">
         <div class="wrap-button">
            ${product.name} 
            <button class="remove-btn" id="remove-btn" data-remove ="${product.id}">remove</button>
         </div>
         <span>${product.price}</span>
         <br>
      </div>
      `
   })

   return html
}




function renderFinalOrder(html){
  return order.innerHTML = html;
}



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
            <h2>${dish.name}</h2>
            <div class="ingredients">${dish.ingredients}</div>
            <div class="price">$ ${dish.price}</div>
         </div>

         <i class="add-btn fa-solid fa-circle-plus" data-btn ="${dish.id}"></i>
         
      </div>`
   })
   
   return renderData
}


//***By using innerHtml the function render() gets the returned data from the function getDataHtml()
function render(){
   container.innerHTML = getDataHtml()
}


//***Call function render
render()


//***This function identify the data attribute from the removed button. So we know which item we should delete.The variable targetItem holds the id of the food that is connected with the remove button we created. */
function identifyRemoveItem(targetItem){
   
   let removedItem = cart.find(val => val.id == targetItem)
   
   removeItem(removedItem)  
}


//**This function delete the selected item from the array cart. It alsos call the function calculatePrice and passes the updated array info */
function removeItem(removedItem){
  
   cart.pop(removedItem)
   // removeCalculatePrice(removedItem)
   renderCart(cart)
}


function removeCalculatePrice(removedItem){
   
   let prices = cart.map(function(product){
       return product.price
   })

   const subtract = (accumulator,removedItem) => accumulator -removedItem;
   console.log(prices.reduce(subtract))
   
   // const reducePrices = prices.reduce(function (accumulator,currentPrice) {
   //    return accumulator - currentPrice   
   // })

   // console.log(reducePrices)
   // renderCart(reducePrices)
   
}