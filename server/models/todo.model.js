const mongoose = require("mongoose");


const TodoSchema = mongoose.Schema(
    {
        todoes: {type: String, required: true},
        checked: {type: Boolean, default: false},

    },
    {timestamps: true}  
    // güncellediğimiz veya yeni oluşturduğumuz zaman bize tarih bilgisi verir
);

const todo = mongoose.model("Todo", TodoSchema);

module.exports = todo;