class Square{
    constructor(side){
        this.side=side;
    }
    area(){
        return this.side*this.side;
    }
    perimeter(){
        return 4*this.side;
    }
}
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    area(){
        return 3.14*this.radius*this.radius;
    }
    circumference(){
        return 2*3.14*this.radius;
    }
}
class BankAccount{
    constructor(balance,accountNumber,Name){
        this.balance=balance;
        this.accountNumber=accountNumber;
        this.Name=Name;
    }
    withdraw(amount){
        if (amount>this.balance){
            console.log("Insufficient funds");
        }
        else{
            this.balance-=amount;
            console.log("Withdrawal successful");
        }
    }
    deposit(amount){
        if (amount<=0){
            console.log("Invalid deposit amount");
        }
        else{
            this.balance+=amount;
            console.log("Deposit successful");
        }
    }
    checkBalance(){
        console.log(`Your Balance ${this.balance}`);
    }
}