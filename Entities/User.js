var EntitySchema = require("typeorm").EntitySchema;
// const User = require("../Models/User").User;

module.exports = new EntitySchema({
    name: "User", // Will use table name `category` as default behaviour.
    tableName: "users", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        firstName: {
            type: "varchar"
        },
        lastName: {
            type: "varchar"
        },
        email: {
            type:"varchar"
        },
        password:{
            type:"varchar"
        },
        phoneNumber: {
            type:"int"
        },
    }
});
