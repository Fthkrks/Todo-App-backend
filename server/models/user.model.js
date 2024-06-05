const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        avatar: {type: String},
        role: {type: String, default: "user", enum: ["user", "admin"] },

    },
    {timestamps: true}  
    // güncellediğimiz veya yeni oluşturduğumuz zaman bize tarih bilgisi verir
);


const user = mongoose.model("User", UserSchema);
module.exports = user;
