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

// Task 5 Filter Method
let inventory = [5, 0, 12, 8, 0]; // Declaring array inventory with at least five product quantities. 
let availableProducts = inventory.filter(quantity => quantity > 0); // Using method to remove products with zero stock.
console.log(availableProducts); // Logging filtered array to console.

// Task 6 Revenue Calculation
let sales = [500, 300, 200, 400]; //Declaring array sales.
let totalRevenue = sales.reduce((total, sale) => total + sale, 0); // Using method to calculate total revenue.
console.log(`Total Revenue: $${totalRevenue}`); // Logging total revenue to console.

// Task 7 find() Method
let customers = ["Alice", "Bob", "Charlie", "David"]; // Declaring array customrs. 
let foundCustomer = customers.find(customers => customers === "Charlie"); // Using method to locate customer.
console.log(`Found Customer: ${foundCustomer}`); // Logging result to console. 

// Task 8 Function Declaration
let amount = 500;
let taxRate = 0.1; // 10%
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}; // Writing function for 10% discount.
console.log(`Total Tax: $${calculateTax(amount, taxRate)}`); // Returning calculated tax and logging it.

// Task 9 Function Expression
let price = 400;
let discount = 20;
const applyDiscount = function(price, disocunt) {
    return price - disocunt; 
}; // Declaring function expression.
console.log("Price After Discount: $", applyDiscount(price, discount)); // Returning discounted price and logging result. 
