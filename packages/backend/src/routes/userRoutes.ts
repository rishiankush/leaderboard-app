import express from "express";
import { User } from "../models/User";

const router = express.Router();

// GET all users
router.get("/", async (_, res) => {
  const users = await User.find();
  res.json(users);
});

// Add new user
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).send("Error creating user");
  }
});

// GET user details by ID
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// PATCH approval status
router.patch("/:id/approval", async (req, res) => {
  const { approval } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { approval },
    { new: true }
  );
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// PATCH /users/:id - update any user field
router.patch("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE user
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send("User not found");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

export default router;
