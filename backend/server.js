const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./db/dbConnection");
const User = require("./db/user");
const cors = require("cors");
const path = require("path");

const __dirName = path.resolve();
console.log(__dirName);

//Middleware for parsing JSON
app.use(express.json());

//Enable CORS
app.use(cors());

//Registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Registration failed" });
  }
});

//Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or Password" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

connectDB();

app.use(express.static(path.join(__dirName, "/frontend/dist")));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirName, "frontend", "dist", "index.html"));
})

app.listen(port, () => {
  console.log("Server is listening on Post 8000");
});
