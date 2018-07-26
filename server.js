
const fs = require("fs");
const http = require("http");
const express = require("express");
const formidable = require("express-formidable");

const app = express();
//const pathPostsFile = __dirname + "/data/posts.json"

app.use(formidable());
app.use(express.static("public"));

 // let content = JSON.parse(fs.readFileSync(pathPostsFile).toString());

    
  //  posts = JSON.parse (file.toString());
  //  console.log(posts);
  app.get('/posts', (req, res) => {
    res.json(fs.readFileSync(__dirname + "/data/posts.json", "utf8"));         
  });
      
    //  console.log(posts);

  app.post('/create-post', (req, res) => {
    const pathPostsFile = __dirname + "/data/posts.json";
    const allposts = JSON.parse(fs.readFileSync(pathPostsFile).toString());
    const post = req.fields;
    allposts.push(post);
    fs.writeFileSync(pathPostsFile, JSON.stringify(allposts));
    res.json(fs.readFileSync(pathPostsFile).toString());
    console.log("data has been appended");
  });
    
  
      
   // });
    

  
  // fs.readFile(__dirname + "/data/posts.json", function(error, file) {
  //   console.log(file.toString());
  //   const parsedFile = JSON.parse(file);
  // });
  app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });


