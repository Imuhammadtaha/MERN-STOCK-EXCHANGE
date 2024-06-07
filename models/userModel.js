import mongoose from "mongoose";

// Coin schema
const coinSchema = new mongoose.Schema({
  coinName: {
    type: String,
    required: true,
  },
  coinPrice: {
    type: Number,
    required: true,
  },
  coinCap: {
    type: Number,
    required: true,
  },
  coinRank: {
    type: Number,
    required: true,
  },
});

const Coin = mongoose.model("Coin", coinSchema);

// User schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    note: {
      type: String,
    },
    address: {
      type: String,
    },
    coins: [coinSchema], // Embedding the coin schema directly
    totalBuying: {
      type: Number,
      default: 0,
    },
    previousBuying: {
      type: String,
    },
    budget: {
      type: String,
      trim: true,
    },
    prefferedLiquidity: {
      type: Number,
    },
    totalSelling: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User, Coin };
