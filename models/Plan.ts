import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema({
  name: String,
  price: String
});

export default mongoose.models.Plan ||
  mongoose.model("Plan", PlanSchema);