const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Chat = require("./models/chat.js");

const ExpressError = require("./ExpressError.js");
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
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

//Home Route
app.get("/chats",async (req,res,next) => {
    try {
        let chats = await Chat.find();
        res.render("index.ejs",{chats});
    } catch (err) {
        next(err);
    }
});

//New Route
app.get("/chats/new",(req,res) => {
    res.render("new.ejs");
});

//Create Route
app.post("/chats",(req,res,next) => {
    try{
        let {from,msg,to} = req.body;
        let newChat = new Chat({
            from: from,
            msg: msg,
            to: to,
            created_at: new Date(),
        });
        newChat.save();
        res.redirect("/chats");
    } catch(err) {
        next(err);
    }
});

//New - show Route
app.get("/chats/:id",async(req,res,next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next( new ExpressError (404,"page not found"));
    }
    res.render("edit.ejs",{chat});
});

//Edit Route
app.get("/chats/:id/edit",async (req,res,next) => {
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs",{chat});
    } catch (err) {
        next(err);
    }
});

//Update Route
app.patch("/chats/:id",async (req,res,next) => {
    try {
        let {id} = req.params;
        let {newMsg} = req.body;
        console.log(newMsg);
        let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newMsg,created_at:new Date()},{runValidators:true,new:true});
        res.redirect("/chats");
        console.log(updatedChat);
    } catch (err) {
        next(err);
    }
});


//Delete Route
app.delete("/chats/:id",async (req,res,next) => {
    try {
        let {id} = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});

app.get("/",(req,res) => {
    res.send("root is working");
});

app.use((err,req,res,next) => {
    let {status = 500, message = "some error occurred"} = err;
    res.status(status).send(message);
});

app.listen(port,() => {
    console.log(`server is listening on port number${port}`);
});