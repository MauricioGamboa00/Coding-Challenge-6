// Task 1 Function Declaration 

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;

}; // Created Formula to calculate profit

calculateProfit(20, 30, 100); // Expected Value $1000
calculateProfit(50, 70, 200); // Expected Value $4000

console.log("Total Profit: $", calculateProfit(20, 30, 100)); // Logging the result of the function 
console.log("Total Profit: $", calculateProfit(50, 70, 200)); // Logging the result of the function

// Task 2 Function Expression

let calculateSalesTax = function(amount, taxRate) {
    let salesTax =Math.floor(amount * taxRate);
    return salesTax;
};

console.log("Sales Tax: $", calculateSalesTax(100, 0.07)); // Expected Value $7
console.log("Sales Tax: $", calculateSalesTax(500, 0.01)); // Expected Value $5


