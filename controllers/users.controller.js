const Users = require("../models/users.models");
const ValidateUser = require("../validation/Users.validation");
//tout les fcts doivent etre async pourlaquelle les requettes est bien aboutissent et dans ces fcts on import le nom de model ==> users dans le dossier models e fichiers users.models.js
const AddUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      /*errors c'est un objet contient tout les errs de la validation dans le dossieer validate*/
      res.status(404).json(errors);
    } else {
      /*validation sur l'email if mail exist status404 ce mecame de validation se trouve dans le dossier validation 1.validate if utilise des espaces akahaw dans le fichier isEmpty*/
      await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          /*on stocke cette reponse dans l'objet errors*/
          errors.Email = "User Exist";
          res.status(404).json(errors);
        } else {
          /*on ajout user avec la methode create ou save à partir min body*/
          await Users.create(req.body);
          res.status(201).json({ message: "User added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllUsers = async (req, res) => {
  try {
    const data = await Users.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglUser = async (req, res) => {
  try {
    const data = await Users.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Users.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteUser = async (req, res) => {
  try {
    await Users.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "User deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};
//export tout les fcts pour n peut les import dans route
module.exports = {
  AddUser,
  FindAllUsers,
  FindSinglUser,
  UpdateUser,
  DeleteUser,
};
/*concurently npm pour demarrer les deux  servers en meme temps*/
