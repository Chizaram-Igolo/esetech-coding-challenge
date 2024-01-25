const express = require("express");
const router = express.Router();

const { auth, db } = require("../firebase/firebase.init");

const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const { addDoc, collection } = require("firebase/firestore");

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName, username } = req.body;

  try {
    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userRef = await addDoc(collection(db, "users"), {
      firstName,
      lastName,
      email,
      username,
      password,
    });

    return res
      .status(201)
      .json({ id: userRef.id, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error.message);
    return res.status(500).json({ error: `Error: ${error.message}` });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    res.status(200).json({ uid: user.uid, user: user, email: user.email });
  } catch (error) {
    console.error("Error signing in:", error.message);
    res.status(401).json({ error: "Authentication failed" });
  }
});

module.exports = router;
