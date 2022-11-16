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
  res.send("<h1>Let's Go to the Movies!</h1>");
});

app.get("/aboutOne", (req, res) => {
  res.render("base", {
    title: "MGM",
    message:
      "More stars than there are in heaven.",
    content:
      "Of the Big Five studios that dominated the era of the studio system. None were as big and bright as Metro-Goldwyn-Mayer (MGM). MGM would boost that they had more stars than there were in the heavens and as a classic film fan, you'd have to agree. Jean Harlow, Spencer Tracy and Katharine Hepburn, Gene Kelly, Judy Garland and Mickey Rooney, Doris Day and Rock Hudson, James Stewart, Ava Gardner, Frank Sinatra, Elizabeth Taylor, Lana Turner, and Grace Kelly. Well just to name a few.",
  });
});

app.get("/Norma Shearer", (req, res) => {
  res.render("base", {
    title: "The Queen of the Lot",
    message: "An actress must never lose her ego, without it she has no talent",
    content:
      "The undisputed 'Queen of the MGM', Norma Shearer was a silent film star that transitioned to 'talkies' well, and went on to be one the biggest stars of the 30's. She was the sweet type that usually played the fiancee or wife. She was the girl that the boy always picked in the end. My favorite Shearer film is going to be The Women (1939). It's funny, smart and every role in the film is played by a female, even the dogs.",
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
    title: "The Face", message:
      "I'd rather wear jewels in my hair than anywhere else. The face should have the advantage of this brilliance.",
    content:
      "Arguably the most beautiful, if not one of the most beautiful women, to ever grace the silver screen. Hedy was more than a pretty face though. She was also incredibly smart and helped invent frequency hopping which gave us wifi and bluetooth. Beauty, brains and incredibly funny to boot, Ms. Lamarr was the whole cinematic package. My favorite Hedy film is My Favorite Spy. Lamarr and Hope shouldn't make such a charming pair, but it works.",
  });
});

app.get("/Clark Gable", (req, res) => {
  res.render("base", {
    title: "The King of the Box Office",
    message: "I know my limitations and I really am at my best in an open shirt, blue jeans and boots.",
    content:
      "There was no bigger star, at no bigger studio than Clark Gable. Gable was the multi-year reigning 'King of the Box Office'. He starred opposite Shearer, Crawford and Lamarr and every other big name female star at MGM. He was the only choice to play Rhett Butler. I mean every actress in Hollywood auditioned for the role of Scarlett O'Hara, EVERY ACTRESS IN HOLLYWOOD. They just gave him the role of Rhett. But really though, who was going to play him Errol Flynn? Gary Cooper? Fred Astaire? (And that's really not a dig on Fred because he's the love of life, so really, I'm just saying) Obviously, my favorite Gable film is 'Gone With the Wind.' 'Really Scarlett, I can't go my whole life waiting to catch you between husbands.' *chef's kiss",
  });
});

app.get("/aboutTwo", (req, res) => {
  res.render("level", {
    title: "Paramount",
    message:
      "24 Stars for 24 (Movie) Stars",
    content:
      "Another member of the 'Big Five', Paramount Pictures is the second oldest Hollywood film studio in the United States and was home to some of the biggest stars of the 40s. A studio that paid recognition to the stars under its banner, on its logo. It was home to Clara Bow, Rudolph Valentino, Mary Pickford and Douglas Fairbanks, GLoria Swanson, Marlene Dietrich, Gary Cooper and Cecil B. DeMille.",
  });
});

app.get("/Bob Hope", (req, res) => {
  res.render("level", {
    title: "The Clown",
    message:
      "I have seen what a laugh can do. It can transform almost unbearable tears into something bearable, even hopeful.",
    content:
      "Bob Hope stands up as the one of the funniest men to ever utter a line. He was great at physical comedy, he could handle a punchline like no one else and listening to his Dean Martin Roast recently, I can safely say his humor stands the test of time. His goofy charm and sense of humor made him one the highest grossing stars of the 40s. If you don't remember his films as well, I'm sure you remember his devotion to the troops. No performer spent more time entertaining or spending time with our soldiers. The all-around good guy and someone who'll make you laugh, no matter your mood. My favorite Hope film is They Got Me Covered. A completely bonkers detective spoof film that will have you laughing in tears.",
  });
});

app.get("/Bing Crosby", (req, res) => {
  res.render("level", {
    title: "The Crooner",
    message:
      "Honestly, I think I've stretched a talent which is so thin it's almost transparent over a quite unbelievable term of years.",
    content:
      "I can't mention Bob Hope and then not immediately mention Bing Crosby. The two were as big a deal as Astaire & Rogers or Hepburn & Tracy. Crosby was the straight man to Hope's banana and they made beautiful music together, sometimes literally. Hope was a huge star in his own right and proper dramatic actor when given the chance. Crosby also gave us the best selling single in history 'White Christmas.' If he had never made all those movies, released all those albums or appeared on those television shows, audiences would know him for that song and its place in our collective hearts. My favorite Bing Crosby film is 'White Christmas', I mean it's really not Christmas until I get to rewatch it.",
  });
});

app.get("/Clara Bow", (req, res) => {
  res.render("level", {
    title: "The Original 'It' Girl",
    message:
      "A sex symbol is a heavy load to carry when one is tired, hurt and bewildered.",
    content:
      "The very first 'It' girl, Clara, starred in a film called It and gave us more than just a phrase. Clara didn't just have a great name for a marquee, she also had a lovely face that today at least has become synonymous with Silent Screen Star. A star that was at several points the number box office draw in the world and someone that in one month received 45,000 fan letters. 0_0 She was a true star, who burned bright and fast but unlike other silent stars like Garbo, Crawford and Shearer, she wasn't able to maintain that stardom into talkies. The personification of the flapper life, she partied, drank, dated and danced close to mental instability. My favorite Bow film is 'Wings.' Lol, it has to be my favorite, honestly, it's the only one I've seen. Silent films are harder to come by okay.",
  });
});

app.get("/Preston Sturges", (req, res) => {
  res.render("level", {
    title: "",
    message: "The most important thing about my career is that I had one",
    content:
      "My favorite director/screenwriter/producer is Mr Sturges, the very first writer, director, producer in fact, so I had to throw him in here. Sturges' films are the height of comedic genius. Brilliant scripts that speak more to human conditions and connection than just on-screen chaos. He wrote funny snapshots of the world as it truly is and I mean, some of those plotlines were beyond outrageous for films that had to pass the Hays Code. He wrote the way people truly felt and that's why he should be celebrated even today. My favorite Sturges film is 'The Miracle of Morgan's Creek.' One of my very favorite films, that again makes you wonder who he paid off to get it pass the commission.",
  });
});


app.listen(port, function () {
  console.log('Listening on port 3000', port);
});
// Tell the app to listen to port 3000
