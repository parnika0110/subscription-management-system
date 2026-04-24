import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  userEmail: String,
  planName: String,
  price: String,
  status: {
    type: String,
    default: "active"
  }
});

export default mongoose.models.Subscription ||
  mongoose.model("Subscription", SubscriptionSchema);