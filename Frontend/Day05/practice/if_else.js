// ATM Withdrawal System Create an ATM system that checks
// balance before withdrawal. Sample Input: Balance: $500, Withdrawal Amount:
// $200 Expected Output: ”Withdrawal successful! New balance: $300”

let balance = 500; // Initial balance
let withdrawalAmount = 200;

if (withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log("Withdrawal successful! New balance: $" + balance);
} else {
    console.log("Insufficient funds!");
}

// Movie Ticket Pricing Calculate movie ticket prices based on age
// and day. Sample Input: Age: 65, Day: ”Tuesday” Expected Output: ”Senior
// discount + Tuesday special: $6”

let age = 65;
let day = "Tuesday";
let ticketPrice = 10;

if (age >= 65) {
    ticketPrice -= 2; // Apply senior discount
    console.log("Senior discount applied.");
}

if (day === "Tuesday") {
    ticketPrice -= 2; // Apply Tuesday special
    console.log("Tuesday special applied.");
}

console.log("Final ticket price: $" + ticketPrice);


//  Password Strength Checker Evaluate password strength based on
//  length and characters. Sample Input: Password: ”MyP@ssw0rd123” Expected
//  Output: ”Strong password!”

let password = "MyP@ssw0rd123";
let isStrong = true;

if (password.length < 12) {
    isStrong = false;
    console.log("Weak password: Too short.");
}

if (!/[A-Z]/.test(password)) {
    isStrong = false;
    console.log("Weak password: No uppercase letter.");
}

if (!/[a-z]/.test(password)) {
    isStrong = false;
    console.log("Weak password: No lowercase letter.");
}

if (!/[0-9]/.test(password)) {
    isStrong = false;
    console.log("Weak password: No number.");
}

if (!/[!@#$%^&*]/.test(password)) {
    isStrong = false;
    console.log("Weak password: No special character.");
}

if (isStrong) {
    console.log("Strong password!");
}


//  Traffic Light System Simulate a traffic light with appropriate
//  actions. Sample Input: Light: ”Yellow” Expected Output: ”Prepare to stop!”

let light = "Yellow";

if (light === "Red") {
    console.log("Stop!");
} else if (light === "Yellow") {
    console.log("Prepare to stop!");
} else if (light === "Green") {
    console.log("Go!");
} else {
    console.log("Invalid light color.");
}

