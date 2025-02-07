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