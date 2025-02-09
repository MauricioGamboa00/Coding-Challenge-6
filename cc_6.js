// Task 1 Function Declaration 

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;

}

calculateProfit(20, 30, 100); // Expected Value $1000
calculateProfit(50, 70, 200); // Expected Value $4000

console.log("Profit Example 1:", calculateProfit(20, 30, 100));
console.log("Profit Example 2:", calculateProfit(50, 70, 200));

