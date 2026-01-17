const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "sujal",
        to: "prathamesh",
        msg: "Data Structures & Algorithm is super easy",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "rushikesh",
        msg: "give cloud computing note",
        created_at: new Date()
    },
    {
        from: "ram",
        to: "harsh",
        msg: "database is easy",
        created_at: new Date()
    },
    {
        from: "shreyash",
        to: "ashitosh",
        msg: "send me your exam sheets",
        created_at: new Date()
    },

];

Chat.insertMany(allChats);
