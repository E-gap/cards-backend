const {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  putContact,
  patchContactFavorite,
} = require("./contacts");

const {
  userRegister,
  userVerifyEmail,
  userVerifyEmailRepetedly,
  userLogin,
  userCurrent,
  userLogout,
  userUpdateSubscription,
  userUpdateAvatar,
} = require("./users");

const { getAllScores } = require("./scores");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  putContact,
  patchContactFavorite,
  userRegister,
  userVerifyEmail,
  userVerifyEmailRepetedly,
  userLogin,
  userCurrent,
  userLogout,
  userUpdateSubscription,
  userUpdateAvatar,
  getAllScores,
};
