const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateUser(data) {
 /*objet errors contient tt les errors*/
  let errors = {};
  /*data == req.body*/
    data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
  data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
  data.Age = !isEmpty(data.Age) ? data.Age : "";
 
  if (!validator.isEmail(data.Email)) {
    errors.Email = "Format Email required";
  }

  if (validator.isEmpty(data.Email)) {
    errors.Email = "Required Email";
  }
  if (validator.isEmpty(data.Lastname)) {
    errors.Lastname = "Required Lastname";
  }
  if (validator.isEmpty(data.Firstname)) {
    errors.Firstname = "Required Firstname";
  }
  if (validator.isEmpty(data.Age)) {
    errors.Age = "Required Email";
  }
/*exprt */
  return {
    /*vooir les errs*/
      errors,
      /*var isvalid mich tath true or false*/
      isValid: isEmpty(errors)
  }
};
