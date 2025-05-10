// Question 1

// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName
    this.isEnabled = isEnabled
    this.userGroupAccess = userGroupAccess

    this.toggleFeature = function (flag) {
   let feature = this.isEnabled = flag;
   if(this.isEnabled== true){
    switch (this.userRole){
        case "Admin":
            console.log("Full access")
            break;
            case "User":
                console.log("Limited access")
                break;
                default:
                    console.log("Limited access")
                    break;
    }
}
    }
    
}
FeatureToggle.prototype.canAcces = function (userRole) {
   return this.userGroupAccess.includes(userRole);
    }

    let firstFeature = new FeatureToggle("log in",true,["betatesters","admin"])

     console.log(firstFeature);
     console.log(firstFeature.canAcces());
    console.log(firstFeature.toggleFeature());


//question 2

// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.


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

// You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.


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




//Question 4

// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

class Employee{
    constructor(id,name,perfomanceMetrics,feedback){
this.id = id
this.name = name
this.perfomanceMetrics= perfomanceMetrics
this.feedback = feedback
    }
}


Employee.prototype.averageScore = function(){
    let average= Object.values(this.perfomanceMetrics)
    return average.reduce ((x,scores) => x+scores,0)/average.length
    }

    Employee.prototype.perfomanceClassification = function(){
      let average = this.averageScore()
    if(average >= 20){console.log("level one")}
    else if(average >= 10 && average <20){console.log("level 2")}
    else{console.log("level 3")}
    }

    Employee.prototype.newFeedback = function(){
    let average = this.averageScore()
    if (average >=15){
        this.feedback = ["Good perfomance,your communication is effective" ,"Your are very efficient." , "You are reliable and keep up with the good work."]
    }
    else if(average >=7 && average <15){
        this.feedback =["Good work but work on your communication", "Improve your effieciency.","Put in more work and be more reliable." ]
    }
    else{this.feedback = ["You can do better on your communication","Work more on your efficiency","Good work but try and be more reliable."]}
    return this.feedback
    }
    
    let employee = new Employee(40,"Victoria",{communication:15,efficiency:16,reliability:10},[])
    console.log(employee);
      console.log(employee.averageScore())
     console.log(employee.perfomanceClassification());
     console.log(employee.newFeedback());


    //      Question 5

// Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

class Course {
    constructor(title,instructor,students){
this.title = title
this.instructor = instructor
this.students = students
    }
}
Course.prototype.namesThatCompletedCourse = function(){
return this.students.filter(student => student.completionStatus === true)
}
Course.prototype.enrolledStudents = function(expertise){
return this.students.filter(student => this.instructor.expertise === expertise).length;
}
Course.prototype.message = function(){
if(this.student.length > 5){return `${this.instructor.name}:You have more than 5 students.`}
else{`${this.instructor.name}:You have less than 5 students.`}
}

let courses = new Course ("Javascript",{name:"Hunter",expertise:"frontend"},[
    {name:"Meron",completionStatus:true},
    {name:"Neema",completionStatus:false},
    {name:"Yordanos",completionStatus:false},
    {name:"Ogega",completionStatus:true}
])

 console.log(courses);
  console.log(courses.enrolledStudents("frontend"));
  console.log(courses.namesThatCompletedCourse());
  console.log(courses.message());




