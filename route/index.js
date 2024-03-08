const express = require("express")
const router = express.Router();
const usermodel = require('./user')

const authenticateUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await usermodel.findOne({ email: email });
        if (!user || user.password !== password) {
            res.status(401).send("Invalid email or password");
        } else {
            req.user = user;
            next();
        }
    } catch (error) {
        console.error("Error authenticating user:", error);
        res.status(500).send("Internal Server Error");
    }
};

router.get("/", function (req, res) {
    res.render("demo")
})

router.get('/login', function (req, res) {
    res.render("login")
})

router.post('/signin/home',authenticateUser, function (req, res) {
    res.render("home",{username:req.user.username})
})

router.post("/register", async (req, res) => {
    try {
        const { username, email, password, Cpassword } = req.body;
        if (password === Cpassword) {
            const newuser = new usermodel({
                username: username,
                email: email,
                password: password,
            })
            const saveuser = await newuser.save();
            res.render("home", { username: username })
        } else {
            res.render("Password Do Not Match")
        }
    } catch (error) {
        console.error("Error Saving User:", error);
        res.status(400).send(error.message)
    }
})

router.get("/userall", async function (req, res) {
    const alluser = await usermodel.find()
    res.send(alluser)
})

router.get("/delete", async function (req, res) {
    const deleteuser = await usermodel.findOneAndDelete({
        username: "pradip"
    })
    res.send(deleteuser)
})

module.exports = router;
