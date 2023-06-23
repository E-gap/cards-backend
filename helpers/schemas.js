const { Schema } = require("mongoose");
const Joi = require("joi"); // для перевірки баді при запиті

const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// схемы Joi для контактов
const addContactsSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).required(),
  favorite: Joi.boolean(),
});

const patchContactsFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

// схема mongoose для контактов
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      requured: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// схема mongoose для scores
const scoreSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// схемы Joi для пользователей - проверка req.body
const registerSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

// схемы Joi для email пользователей
const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

// схема mongoose для пользователей

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User's name is required"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Ema/* il is required"],
      unique: true,
    },
    /*  subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    }, */
    token: {
      type: String,
      default: "",
    },
    /* avatarURL: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    }, */
  },
  { versionKey: false, timestamps: true }
);

module.exports = {
  addContactsSchema,
  patchContactsFavoriteSchema,
  contactSchema,
  userSchema,
  emailSchema,
  registerSchema,
  loginSchema,
  scoreSchema,
};
