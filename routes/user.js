const express = require('express');
const router = express.Router();

const {login, signup} = require("../controllers/Auth");
const {authz, isStudent, isAdmin} = require("../middlewares/auth");

router.post("/login",login);
router.post("/signup", signup);

router.get("/",authz, (req,res)=> {
    res.json({
        success : true,
        message : "Welcome to the protection route for test"
    })
})

// protected route
router.get("/student",authz, isStudent,(req, res)=> {
    res.json({
        success: true,
        message : "Welcome to the protection route for Student"
    });
});

router.get("/admin",authz, isAdmin ,(req,res)=> {
    res.json({
        success: true,
        message : "Welcome to the protection route for Admin"
    });
});


module.exports = router;