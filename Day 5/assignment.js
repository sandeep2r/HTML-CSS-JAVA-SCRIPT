function ageValidate(age) {
    if(isNaN(age)){
        alert("Age should be in numbers");
        return 0;
    }
    if(age <= 21 || age >= 50){
        alert("Age should be between 21 and 50");
        return 0;
    }
    alert("Thank you for entering at a valid age, you are eligible to work.");
}

ageValidate(prompt("Enter Age"));