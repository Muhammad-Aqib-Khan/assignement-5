// / - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

var cart:string[]=["Bags","Shoes","Laptops","Books","accessries"]
    function shoppingCart(){

//    item is removed through pop
             cart.pop()
            console.log("You have removed a product =",cart)
    
//    item is added through push
             cart.push("Rolex watch")
            console.log("You have added a new Item to the cart =",cart)

//     now I am going to use splicefuntion to add and remove item
         cart.splice(3,0,"Iphone","softy","shirts","sunglasses")
         console.log("Few items are added to cart are given below==",cart)
            
         // to remove values through splice 
             cart.splice(4,1,)
             cart.splice(6,1,)
            console.log("only one item is removed",cart)
            

              


             
}

shoppingCart()