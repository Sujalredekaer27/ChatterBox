const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
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

//Home Route
app.get("/chats",async (req,res) => {
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
});

//New Route
app.get("/chats/new",(req,res) => {
    res.render("new.ejs");
});

//Create Route
app.post("/chats",(req,res) => {
    let {from,msg,to} = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    newChat.save()
        .then((res) => {
            console.log("new chat is saved to database");
        })
        .catch((err) => {
            console.log(err);
        })
    res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit",async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//Update Route
app.patch("/chats/:id",async (req,res) => {
    let {id} = req.params;
    let {newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newMsg,created_at:new Date()},{runValidators:true,new:true});
    res.redirect("/chats");
    console.log(updatedChat);
});

//Delete Route
app.delete("/chats/:id",async (req,res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.get("/",(req,res) => {
    res.send("root is working");
});

app.listen(port,() => {
    console.log(`server is listening on port number${port}`);
});