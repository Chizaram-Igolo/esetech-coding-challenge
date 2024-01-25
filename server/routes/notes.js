const express = require("express");
const router = express.Router();

const { db } = require("../firebase/firebase.init");
const {
  addDoc,
  getDoc,
  getDocs,
  doc,
  collection,
  deleteDoc,
  query,
} = require("firebase/firestore");

// Create a new note
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    const docRef = await addDoc(collection(db, "notes"), {
      title,
      content,
    });

    const newNote = await docRef.id;
    res.status(201).json({ id: newNote.id, title, content });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all notes
router.get("/", async (req, res) => {
  try {
    const q = query(collection(db, "notes"));

    const querySnapshot = await getDocs(q);

    const notes = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", notes.push({ id: doc.id, ...doc.data() }));
    });

    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a specific note by ID
router.get("/:id", async (req, res) => {
  console.log(req.params);

  try {
    const { id } = req.params;
    const docRef = doc(db, "notes", id);
    const docSnap = await getDoc(docRef);
    let note;

    if (docSnap.exists()) {
      note = docSnap.data();
    } else {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json({ id: note.id, ...note });
  } catch (error) {
    console.error("Error fetching note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a note by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    await db.collection("notes").doc(id).update({
      title,
      content,
    });
    const updatedNote = await db.collection("notes").doc(id).get();
    res.json({ id: updatedNote.id, ...updatedNote.data() });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a note by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteDoc(doc(db, "notes", id));

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
