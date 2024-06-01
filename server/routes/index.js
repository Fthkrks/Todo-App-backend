const express = require("express");
const router = express.Router();

// Diğer rota roto dosyalarını içe aktarıyoruz

const TodoRoute = require("./todo.route.js");


// Her rotayı ilgili yol altında kullanıyoruz 

router.use("/todos", TodoRoute);

module.exports = router;
