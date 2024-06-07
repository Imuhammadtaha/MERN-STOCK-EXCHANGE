import { comparePassword, hashPassword } from "../helper/authHelper.js";
import { User, Coin } from "../models/userModel.js";
import JWT from "jsonwebtoken";
//sign up
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.fields;
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is Required" });
    }

    //checking user for duplication
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists! Please log in or try a different email.",
      });
    }

    //securing password
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    }).save();

    res.status(200).send({
      success: true,
      message: "User created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

//login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password, answer } = req.fields;
    if (!email || !password || !answer) {
      return res.status(404).send({
        success: false,
        message: "Credentials are incorrect or missing",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Password is incorrect",
      });
    }
    //Json web token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfull",
      user: {
        name: user.name,
        id: user._id,
        email: user.email,
        phone: user.phone,
        address: user.address,
        totalBuying: user.totalBuying,
        totalSelling: user.totalSelling,
        coins: user.coins,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login ",
      error,
    });
  }
};

//Forgot Password

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.fields;
    if (!email) {
      res.status(404).send({ message: "Email is required" });
    }
    if (!answer) {
      res.status(404).send({ message: "Answer is required" });
    }
    if (!newPassword) {
      res.status(404).send({ message: "New Password is required" });
    }
    // check
    const user = await User.findOne({ email });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await User.findOneAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};

// Add Coin to Portfolio Controller
export const addCoinToPortfolioController = async (req, res) => {
  try {
    const { coinName, coinPrice, coinCap, coinRank } = req.fields;

    if (!coinName || !coinPrice || !coinCap || !coinRank) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const token = req.headers.authorization.split(" ")[1]; // Assuming Bearer token
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const newCoin = { coinName, coinPrice, coinCap, coinRank };
    user.coins.push(newCoin);

    await user.save();

    res.status(200).send({
      success: true,
      message: "Coin added to portfolio",
      coins: user.coins,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error adding coin to portfolio",
      error,
    });
  }
};

// getting portfolio
export const getPortfolio = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Assuming Bearer token
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const portfolio = user.coins;

    res.status(200).send({
      success: true,
      message: "All coins you bought",
      total: portfolio.length,
      portfolio,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Getting Portfolio",
      error,
    });
  }
};

// Controller to add recommendations
export const addRecommendationController = async (req, res) => {
  try {
    const { budget, prefferedLiquidity, previousBuying } = req.fields;

    if (!budget) {
      return res.status(400).send({ message: "Budget is Required" });
    }
    if (!prefferedLiquidity) {
      return res
        .status(400)
        .send({ message: "Preferred Liquidity is Required" });
    }
    if (!previousBuying) {
      return res.status(400).send({ message: "Previous buying is Required" });
    }

    // Get the user ID from the decoded JWT
    const userId = req.user._id;

    // Find the user by ID and update their recommendations
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    user.prefferedLiquidity = prefferedLiquidity;
    user.budget = budget;
    user.previousBuying = previousBuying;

    await user.save();

    res.status(200).send({
      success: true,
      message: "Recommendations added successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in adding Recommendation",
      error,
    });
  }
};

export const getRecommendationController = async (req, res) => {
  try {
    // Get the user ID from the decoded JWT
    const userId = req.user._id;

    // Find the specific user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Respond with the user's recommendations
    res.status(200).send({
      success: true,
      message: "Your Requirements",
      recommendations: {
        budget: user.budget,
        prefferedLiquidity: user.prefferedLiquidity,
        previousBuying: user.previousBuying,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting your recommendations",
      error,
    });
  }
};
export const addNoteController = async (req, res) => {
  try {
    const { note } = req.fields;

    if (!note) {
      return res.status(400).send({ message: "Note is required" });
    }

    const token = req.headers.authorization.split(" ")[1]; // Assuming Bearer token
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id;

    // Find the specific user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    user.note = note;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Note added Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in adding Note",
      error,
    });
  }
};
export const getNotesController = async (req, res) => {
  try {
    const users = await User.find({}, "note"); // Select only the note field
    const notes = users.map((user) => user.note); // Extract notes from users

    res.status(200).send({
      success: true,
      message: "All notes",
      total: notes.length,
      notes,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while getting all notes",
      error,
    });
  }
};
