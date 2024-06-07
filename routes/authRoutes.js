import express from "express";
import {
  addCoinToPortfolioController,
  addNoteController,
  addRecommendationController,
  forgotPasswordController,
  getNotesController,
  getPortfolio,
  getRecommendationController,
  loginController,
  registerController,
} from "../controllers/authController.js";

import { requireSignin } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();
//routing

//Register Router || METHOD POST
router.post("/register", registerController);
router.post("/login", loginController);

router.post("/forgot-password", forgotPasswordController);
router.post("/buy-coin", requireSignin, addCoinToPortfolioController);
router.get("/get-portfolio", requireSignin, getPortfolio);
router.post("/add-recommendations", requireSignin, addRecommendationController);
router.post("/add-note", requireSignin, addNoteController);
router.get(
  "/get-user-requirements",
  requireSignin,
  getRecommendationController
);
router.get("/get-notes", getNotesController);
export default router;
