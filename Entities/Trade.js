const Trade = require("../Models/Trade").Trade;
const EntitySchema = require("typeorm").EntitySchema; 
// const User = require("../Models/User").User;

module.exports = new EntitySchema({
    name: "Trade",
    tableName: "trades", 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar"
        },
        text: {
            type: "text"
        }
    },
    // relations: {
    //     user: {
    //         target: User,
    //         type: "many-to-one",
    //         joinTable: true,
    //         cascade: true
    //     }
    // }
});
