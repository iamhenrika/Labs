// 1. Build 10 Routes and a view engine, say anything you want
// 2. Make 2 different templates, and use them both in different routes ( you can only have 1 view engine but multiple templates )


const express = require("express");
// load express
const app = express();
// create express app
const fs = require("fs");
const port = 3000

app.engine("template", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        const rendered = content.toString()
            .replace("#title#", "<title>" + options.title + "</title>")
            .replace("#message#", "<h1>" + options.message + "</h1>")
            .replace("#content#", "<div>" + options.content + "</div>");
        return callback(null, rendered);
    });
});

app.set("views", "./views");
// Configure the app (app.set)
app.set("view engine", "template");
// middleware

app.get("/", function (req, res) {
    res.send("<h1>MOVIES!</h1>");
  });
  
  app.get("/about", (req, res) => {
    res.render("base", {
      title: "MGM",
      message:
        "More stars than there are in the heavens.",
      content:
        "Of the Big Five studios that dominated the era of the studio system. None were as big and bright as Metro-Goldwyn-Mayer (MGM). MGM would boost that they had more stars than there were in the heavens and as a classic film fan, you'd have to agree.",
    });
  });
  
  app.get("/Norma Shearer", (req, res) => {
    res.render("base", {
      title: "The Queen of the Lot",
      message: "An actress must never lose her ego, without it she has no talent",
      content:
        "The undisputed 'Queen of the MGM', Norma Shearer was a silent film star that transitioned to 'talkies' well, and went on to be one the biggest stars of the 30's. She was the sweet type that usually played the fiancee or wife. She was the girl that the boy always picked in the end. My favorite Shearer film is going to have be The Women (1939). It's funny, smart and every role in the film is played by a female, even the dogs.",
    });
  });
  
  app.get("/Joan Crawford", (req, res) => {
    res.render("base", {
      title: "The Knockout",
      message: "I never go outside unless I look like Joan Crawford the movie star. If you want to see the girl next door, go next door.",
      content:
        "MGM wasn't big enough for two queens so Joan Crawford settled for being the bigger star, with the longer career. Also a silent film star that was able to transition to talkies she never shied away from the sex symbol role and always gave the audience the Crawford touch. Crawford never forgot to be the movie star and that's part of lasting name recognition. My favorite Crawford film is probably also The Women but for purposes of this site, let's say it's Mannequin (1937). It's a run of the mill: 'women's picture' but I do love it.",
    });
  });
  
  app.get("/Hedy Lamarr", (req, res) => {
    res.render("base", {
      title: "The Face",
      message:
        "I'd rather wear jewels in my hair than anywhere else. The face should have the advantage of this brilliance.",
      content:
        "Arguably thee most beautiful, if not one of the most beautiful women, to ever grace the silver screen. Hedy was more than a pretty face though. She was also incredibly smart and helped invent frequency hopping which gave us wifi and bluetooth. Beauty, brains and incredibly funny to boot, Ms. Lamarr was the whole cinematic package. My favorite Hedy film is My Favorite Spy. Lamarr and Hope shouldn't make such a charming pair, but it works.",
    });
  });
  
  app.get("/Clark Gable", (req, res) => {
    res.render("base", {
      title: "The King of the Box Office",
      message: "I know my limitations and I really am at my best in an open shirt, blue jeans and boots.",
      content:
        "There was no bigger star, at no bigger studio than Clark Gable. Gable was the multi-year reigning 'King of the Box Office'. He starred opposite Shearer, Crawford and Lamarr and every other big name female star at MGM. He was the only choice to play Rhett Butler. I mean every actress in Hollywood auditioned for the role of Scarlett O'Hara, EVERY ACTRESS IN HOLLYWOOD. They just gave him the role of Rhett. But really though, who was going to play him Errol Flynn? Gary Cooper? Fred Astaire? (And that's really not a dig on Fred because he's love of life, so really, I'm just saying) Obviosuly, my favorite Gable film is 'Gone With the Wind.' 'Really Scarlett, I can't go my whole life waiting to catch you between husbands.' *chef's kiss",
    });
  });
  
  app.get("/", (req, res) => {
    res.render("level", {
      title: "",
      message:
        "",
      img: "",
      content:
        "",
    });
  });
  
  app.get("/", (req, res) => {
    res.render("level", {
      title: "",
      message:
        "",
      img: "",
      content:
        "",
    });
  });
  
  app.get("/", (req, res) => {
    res.render("level", {
      title: "",
      message:
        "",
      img: "",
      content:
        "",
    });
  });

  app.get("/", (req, res) => {
    res.render("level", {
      title: "",
      message:
        "",
      img: "",
      content:
        "",
    });
  });
  
  app.get("/", (req, res) => {
    res.render("level", {
      title: "",
      message:
        "",
      img: "",
      content:
        "",
    });
  });
  
  
  app.listen(port, function () {
    console.log('Listening on port 3000', port);
  });
  // Tell the app to listen to port 3000