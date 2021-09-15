// class User {
//     constructor(id, firstName, lastName, email, phoneNumber, password) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.phoneNumber = phoneNumber;
//         this.password = password;
//     }
// }

// module.exports = {
//     User: new User()
// };
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      // define association here
    }
  };

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber:DataTypes.STRING,
    password:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
