// Task 1 Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
}; // Declaring object with properties.
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`); // Logging each property to console.

// Task 2 Object Methods
let order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing", // Declaring object with properties.
    displayOrder() {
        console.log("Order ID: ", this.orderID);
        console.log("Total Amount: ", this.totalAmount);
        console.log("Status: ", this.status)
    }
}; // Adding method inside object to log order details.
order.displayOrder(); // Calling method and logging details.

// Task 3 Array Manipulation (push, pop, shift, unshift)
let cartItems = ["Water Bottle", "Paper Cup", "Napkin"]; // Declaring array with three product names. 
cartItems.push("Paper Plate"); // Adding new product to cart. 
cartItems.pop(); // Removing last item.
cartItems.unshift("Soda"); // Adding item in the beginning.
cartItems.shift(); // Removing item from the beginning.
console.log("Updated Shopping Cart: ", cartItems); // Logging final array to console.

// Task 4 Map Method
let prices = [100, 200, 300]; // Declaring array prices. 
let discountRate = 0.1; // 10% discount.
let discountedPrices = prices.map(price => price * (1 - discountRate)); // Using method to apply discount to each price.
console.log("Discounted Prices: ", discountedPrices); // Logging new disocunted prices to console.
