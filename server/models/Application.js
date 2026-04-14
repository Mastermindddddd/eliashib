import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    // personal info step
    title: { type: String, default: "" },
    firstName: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    idType: { type: String, enum: ["SA ID", "Passport", ""], default: "" },
    idNumber: { type: String, default: "" },
    idCountry: { type: String, default: "" },
    gender: { type: String, enum: ["Female", "Male", ""], default: "" },
    dob: { type: String, default: "" },

    mobile: { type: String, default: "" },
    familyMobile: { type: String, default: "" },
    email: { type: String, required: true, trim: true },
    postalCode: { type: String, default: "" },

    company: { type: String, default: "" },
    workDuration: { type: String, default: "" },
    helpMessage: { type: String, default: "" },

    communicationMethod: {
      type: String,
      enum: ["Phone", "Email", ""],
      default: "",
    },

    paymentMethod: {
      type: String,
      enum: ["Pick-up from my workplace", "Electronic Funds Transfer (EFT)", "ATM Direct Deposit", ""],
      default: "",
    },

    salaryDate: { type: String, default: "" },
    commitment: { type: Boolean, default: false },

    // document step
    selfieUrl: { type: String, default: "" },
    idPassportUrl: { type: String, default: "" },

    // consent step from upload page
    marketingEmail: {
      type: String,
      enum: ["yes", "no", ""],
      default: "",
    },
    marketingSMS: {
      type: String,
      enum: ["yes", "no", ""],
      default: "",
    },
    marketingPhone: {
      type: String,
      enum: ["yes", "no", ""],
      default: "",
    },
    marketingWhatsapp: {
      type: String,
      enum: ["yes", "no", ""],
      default: "",
    },

    joinMore: { type: Boolean, default: false },
    acceptConsent: { type: Boolean, default: false },

    // status
    personalInfoCompleted: { type: Boolean, default: false },
    documentsCompleted: { type: Boolean, default: false },
    submitted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);