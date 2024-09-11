function checkDigitsInName (name){
    if (typeof(name) !== 'string'){
        return "Invalid Input";
    }

    let nameCharacters = name.split('');

    for (let char of nameCharacters){
        if (char >= '0' && char <= '9'){
            return true;
        }
    }

    return false;
}