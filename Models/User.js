class User {
    constructor(id, firstName, lastName, email, phoneNumber, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}

module.exports = {
    User: new User()
};