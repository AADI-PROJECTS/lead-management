import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    company: String,
    requirement: String,

    emailSent: {
      type: Boolean,
      default: false,
    },

    emailOpened: {
      type: Boolean,
      default: false,
    },

    linkClicked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Lead ||
  mongoose.model("Lead", LeadSchema);