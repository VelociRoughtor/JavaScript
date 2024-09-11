function sendNotification (email) {
    if (typeof(email) !== 'string' || email.includes('@') === false){
        return "Invalid Email";
    }

    let emailParts = email.split('@');
    let userName = emailParts[0];
    let DomainName = emailParts[1];

    return userName + " sent you an email from " + DomainName;
}
