const Score = require("../models/score");
const { HttpError, addScoreSchema } = require("../helpers");

const getAllScores = async (req, res, next) => {
  // const { _id: owner } = req.user;
  // const { page = 1, limit = 20, favorite = "none" } = req.query;
  // const skip = (page - 1) * limit;
  // console.log(favorite);
  // const filterByFavorite = favorite === "none" ? {} : { favorite };

  try {
    const result = await Score
      .find /* filterByFavorite, "-createdAt -updatedAt", */
      /* {
      skip,
      limit,
    }).select({ favorite } */
      ()
      .populate("owner", "name");

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
      throw HttpError(404);
    }
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
}; */

const addScore = async (req, res, next) => {
  const { _id: owner } = req.user;

  try {
    console.log(req.body);
    const { error } = addScoreSchema.validate(req.body);
    if (error) {
      throw HttpError(404, "missing required name field");
    }

    const result = await Score.create({ ...req.body, owner });
    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/* const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw HttpError(404);
    }

    res.status(200).json({ message: "contact deleted", data: result });
  } catch (error) {
    next(error);
  }
}; */

/* const putContact = async (req, res, next) => {
  try {
    const { error } = addContactsSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing fields");
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!result) {
      throw HttpError(404);
    }
    res.status(200).json({ message: "contact updated", data: result });
  } catch (error) {
    next(error);
  }
}; */

/* const patchContactFavorite = async (req, res, next) => {
  try {
    const { error } = patchContactsFavoriteSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing fields favorite");
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!result) {
      throw HttpError(404);
    }
    res.status(200).json({ message: "contact updated", data: result });
  } catch (error) {
    next(error);
  }
}; */

module.exports = {
  getAllScores,
  // getContactById,
  addScore,
  /* deleteContact,
  putContact,
  patchContactFavorite, */
};
