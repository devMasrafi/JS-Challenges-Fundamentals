// Build a script that does the following, in order:

// Using .filter(), get only the "food" expenses into their own array.
// Using .reduce(), calculate the total amount spent on food from that filtered array.
// Write a closure-based function called createBudgetTracker(limit) that:
// Remembers a running total of money spent, starting at 0
// Returns an inner function addExpense(amount) that adds to the running total each time it's called, and logs whether the tracker is still under budget or has gone over the limit
// Example usage: const tracker = createBudgetTracker(500); tracker(100); tracker(300); tracker(150); — each call should log the running total and under/over status

const expenses = [
  { category: "food", amount: 450 },
  { category: "transport", amount: 120 },
  { category: "food", amount: 300 },
  { category: "entertainment", amount: 200 },
  { category: "transport", amount: 80 },
  { category: "food", amount: 150 },
];

const foodGoods = expenses.filter(function (items) {
  return items.category == "food";
});

function createBudgetTracker(limit) {
  let currentTotal = 0;
  return function (amount) {
    currentTotal += amount;
    if (currentTotal > limit) {
      console.log("Amount Is Higher");
    }
    if (currentTotal < limit) {
      console.log("Amount Is Lower");
    }
  };
}

const totalAmountSpent = foodGoods.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);

console.log(foodGoods);

const tracker = createBudgetTracker(500);
tracker(100);
tracker(300);
tracker(150);
