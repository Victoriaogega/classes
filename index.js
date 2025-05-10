//question 2
function Timelog (freeLancerName,projectDetails,logs){
this.freeLancerName = freeLancerName;
this.projectDetails = projectDetails;
this.logs = logs;
}
Timelog.prototype.calculateTotalEarnings = function(){
return this.logs.reduce((y,log) => y+log.hoursWorked * this.projectDetails.hourlyRate,0)
}

Timelog.prototype.filterLogsByDate= function(startDate,endDate){
    return this.logs.filter(log => log.date <= endDate && log.date >= startDate)

}
Timelog.prototype.weeklyHours= function(){
let totalHours =this.logs.reduce((x,log)=> x+log.hoursWorked,0) 
if (totalHours >= 40){
    console.log (`Total hours are ${this.logs.hoursWorked}`)}
    else {
console.log("Hours are less than 40.")
    }
}
let firstUser = new Timelog("Ogega", {name:"login feature",hourlyRate:1000},[
    {date:"04-12-2025",hoursWorked:5},
    {date:"05-12-2025",hoursWorked:7},
    {date:"06-12-2025",hoursWorked:8},
    {date:"07-12-2025",hoursWorked:5},
    {date:"08-12-2025",hoursWorked:4},
    {date:"09-12-2025",hoursWorked:10}
])

console.log(firstUser.calculateTotalEarnings())
console.log(firstUser)
console.log(firstUser.weeklyHours())
console.log(firstUser.filterLogsByDate("04-12-2025","06-12-2025"))

// question 3
function Order(customer,items,status){
this.customer= customer
this.items = items
this.status =status
}

Order.prototype.computeTotalCost = function(){
return this.items.reduce((x,cost) => x+cost.quantity * cost.unitPrice,0)
}
Order.prototype.updateOrderStatus = function(){
if (this.status.includes("successful")){
    console.log("Your payment has been successful.")}
    else{"Your payment is being processed."}

}
Order.prototype.categorizeOrederUrgency = function(){

}

let firstOrder = new Order({name:"Victoria",email:"victoria@gmail.com"},[
    {productName:"phones",quantity:2,unitPrice:30000},
    {productName:"laptop",quantity:1,unitPrice:80000},
    {productName:"earphones",quantity:1,unitPrice:3000},
    {productName:"headphones",quantity:5,unitPrice:5000}
],"Your payment is successful")

console.log(firstOrder);
console.log(firstOrder.computeTotalCost());
console.log(firstOrder.updateOrderStatus());

class Employee{
    constructor(id,name,perfomanceMetrics,feedback){
        this.id = id
        this.name = name 
        this.perfomanceMetrics = perfomanceMetrics
        this.feedback = feedback
    }
}





