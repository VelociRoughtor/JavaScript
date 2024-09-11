function calculateTax (income, expenses){
    if (typeof(income) !== 'number' || income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }

    let tax = (income - expenses) * 0.2;
    
    return tax;
}


