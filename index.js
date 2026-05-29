const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const AdminSchema = require("./models/AdminSchema");

const PORT = 8000;
app.use(cors({
    origin: "*"
}))

connectDB();
app.use(express.json())

// app.get("/user-info", (req, res) => {
//     res.json("Welcome Rajesh");
// })

// app.post("/user-login", (req, res) => {
//     console.log(req.body);

//     const username = req.body.email;
//     const password = req.body.password;

//     if (username === "raj@gmail.com" && password === "Rajesh") {
//         res.json({ status: 200, message: "User logged in successfully" });
//     } else {
//         res.json({ status: 400, message: "Username or Password not match" });
//     }
// })

app.get("/api/get-place", (req, res) => {
    res.json({ message: "Fetching all places" });
});

app.post("/api/add-places", async (req, res) => {
    const { name,
        email,
        mobile,
        password } = req.body;
    console.log(req.body);


    const result = await AdminSchema.create({
        name: name,
        email: email,
        mobile: mobile,
        password: password
    })
    console.log(result);

    res.json({ status: 201, message: "Data added successfully" })
});

app.get("/api/get-user/:userid", (req, res) => {
    const id = req.params.userid
    res.json({ userId: id })
})

app.post("/api/get-place", (req, res) => {
    const { placeId } = req.body
    res.json({ placeId: placeId })
});

app.post("/api/get-place/:userid", (req, res) => {
    const { userid } = req.params;
    const { placeId } = req.body
    res.json({ placeId: placeId, userid: userid })
});

app.put("/api/update-places", (req, res) => {
    const { place, latitude, longitude } = req.body
    res.json({ status: 201, message: "Data updated successfully", place: { place, latitude, longitude } })
});

app.delete("/api/delete-user/:userid", (req, res) => {
    const id = req.params.userid
    res.json({ userId: id })
})

app.listen(PORT, () => {
    console.log("Server started on port no. ", PORT);
})
